const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // Adiciona o middleware CORS


// Conectar ao MongoDB (substitua a URL pelo seu próprio cluster do MongoDB)
mongoose.connect('mongodb+srv://itamar_asr:eu190899@cluster0.dx3mu2d.mongodb.net/JOBs?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir um modelo de usuário simples
const User = mongoose.model('usuarios', { tipo: String });

// Rota para salvar a opção escolhida no banco de dados
app.post('/api/saveOption', async (req, res) => {
  try {
    const { tipo } = req.body;
    const user = new User({ tipo });
    await user.save();
    res.status(201).json({ message: 'Opção salva com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao salvar a opção.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
