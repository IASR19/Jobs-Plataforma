const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://itamar_asr:eu190899@cluster0.dx3mu2d.mongodb.net/JOBs?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const recrutadorSchema = new mongoose.Schema({
  tipo: String,
});

const candidatoSchema = new mongoose.Schema({
  tipo: String,
  nome: String,
  sobrenome: String,
  cpf: String,
  email: String,
  areaInteresse: String,
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
});

const Recrutador = mongoose.model('recrutadores', recrutadorSchema);
const Candidato = mongoose.model('candidatos', candidatoSchema);

app.post('/api/saveOption', async (req, res) => {
  try {
    const { tipo, curriculoData } = req.body;
    let usuario;

    if (tipo === 'RECRUTADOR') {
      usuario = new Recrutador({ tipo });
    } else if (tipo === 'CANDIDATO') {
      usuario = new Candidato({ tipo, ...curriculoData });
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

app.post('/salvarDados', (req, res) => {
  const dados = req.body;

  fs.writeFile('dados.json', JSON.stringify(dados), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao salvar dados.' });
    }

    res.status(201).json({ message: 'Dados salvos com sucesso!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
