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

    // Verificar se a opção selecionada é a opção padrão
    if (novaOpcao === '') {
      setBotaoAvancarHabilitado(false);
      setMensagemErro('Selecione corretamente');
    } else {
      // Limpar a mensagem de erro quando uma nova opção é selecionada
      setBotaoAvancarHabilitado(true);
      setMensagemErro('');
    }

    // Definir a nova opção selecionada
    setOpcaoSelecionada(novaOpcao);
  };

  const handleAvancarClick = async () => {
    // Verificar se a opção selecionada é válida
    if (!botaoAvancarHabilitado) {
      setMensagemErro('Selecione corretamente');
      return; // Não prosseguir se a opção não for válida
    }

    // Limpar a mensagem de erro se a opção for válida
    setMensagemErro('');

    // Realizar o redirecionamento com base na opção selecionada
    if (opcaoSelecionada === 'CANDIDATO' || opcaoSelecionada === 'RECRUTADOR') {
      // Enviar a opção escolhida para o servidor
      try {
        await axios.post('http://localhost:5000/api/saveOption', { tipo: opcaoSelecionada });
        console.log('Opção enviada para o servidor com sucesso!');
      } catch (error) {
        console.error('Erro ao enviar a opção para o servidor:', error);
      }

      // Redirecionar para a página apropriada
      if (opcaoSelecionada === 'CANDIDATO') {
        history.push('/cadastro-candidato');
      } else if (opcaoSelecionada === 'RECRUTADOR') {
        history.push('/cadastro-recrutador');
      }
    }
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
      <button className="cadastro-button cadastro-button-secondary">Voltar</button>

      {/* Exibir a mensagem de erro em vermelho */}
      {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
    </div>
  );
};

export default Cadastro;
