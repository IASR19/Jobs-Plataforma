import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Cadastro.css';

const Cadastro = () => {
  const history = useHistory();

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');
  const [botaoAvancarHabilitado, setBotaoAvancarHabilitado] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  const handleOpcaoChange = (event) => {
    const novaOpcao = event.target.value;

    if (novaOpcao === '') {
      setBotaoAvancarHabilitado(false);
      setMensagemErro('Selecione corretamente');
    } else {
      setBotaoAvancarHabilitado(true);
      setMensagemErro('');
    }

    setOpcaoSelecionada(novaOpcao);
  };

  const handleAvancarClick = async () => {
    if (!botaoAvancarHabilitado) {
      setMensagemErro('Selecione corretamente');
      return;
    }

    setMensagemErro('');

    if (opcaoSelecionada === 'CANDIDATO' || opcaoSelecionada === 'RECRUTADOR') {
      try {
        await axios.post('http://localhost:5000/api/saveOption', { tipo: opcaoSelecionada });
        console.log('Opção enviada para o servidor com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar a opção para o servidor:', error);
      }

      if (opcaoSelecionada === 'CANDIDATO') {
        history.push('/cadastro-candidato');
      } else if (opcaoSelecionada === 'RECRUTADOR') {
        history.push('/cadastro-recrutador');
      }
    }
  };

  const handleVoltarClick = () => {
    // Redirecionar para a tela de login
    history.push('/login');
  };

  return (
    <div className="cadastro-container">
      <h1 className="cadastro-title">Cadastro</h1>
      <p className="cadastro-label">O que você é?</p>
      <select className="cadastro-select" onChange={handleOpcaoChange} value={opcaoSelecionada}>
        <option value="">Selecione...</option>
        <option value="CANDIDATO">CANDIDATO</option>
        <option value="RECRUTADOR">RECRUTADOR</option>
      </select>
      <button
        className="cadastro-button cadastro-button-primary"
        onClick={handleAvancarClick}
        disabled={!botaoAvancarHabilitado}
      >
        Avançar
      </button>
      <button className="cadastro-button cadastro-button-secondary" onClick={handleVoltarClick}>
        Voltar
      </button>

      {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
    </div>
  );
};

export default Cadastro;
