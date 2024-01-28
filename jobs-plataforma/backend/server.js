const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://itamar_asr:eu190899@cluster0.dx3mu2d.mongodb.net/JOBs?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir modelos de usuário para recrutadores e candidatos
const recrutadorSchema = new mongoose.Schema({
  tipo: String,
  // Outros campos específicos de recrutadores
});

const candidatoSchema = new mongoose.Schema({
  tipo: String,
  curriculoData: {
    telefone: String,
    endereco: String,
    formacao: String,
    experiencia: String,
    habilidades: String,
    cursosComplementares: String,
    idiomasRegistrados: [
      {
        idioma: String,
        nivel: String,
      },
    ],
  },
  // Outros campos específicos de candidatos
});

const Recrutador = mongoose.model('recrutadores', recrutadorSchema);
const Candidato = mongoose.model('candidatos', candidatoSchema);

// Rota para salvar a opção escolhida no banco de dados
app.post('/api/saveOption', async (req, res) => {
  try {
    const { tipo, curriculoData } = req.body;
    let usuario;

    if (tipo === 'RECRUTADOR') {
      usuario = new Recrutador({ tipo /* outros campos específicos de recrutadores */ });
    } else if (tipo === 'CANDIDATO') {
      usuario = new Candidato({ tipo, curriculoData });
    } else {
      return res.status(400).json({ error: 'Tipo de usuário inválido.' });
    }

    await usuario.save();
    res.status(201).json({ message: 'Opção salva com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar a opção.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
