import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './PlanosRecrutador.css';

const PlanosRecrutador = () => {
  const history = useHistory();

  const [planoSelecionado, setPlanoSelecionado] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handlePlanoClick = (plano) => {
    setPlanoSelecionado(plano);
  };

  const handleAvancarClick = () => {
    // Verificar se um plano foi selecionado
    if (!planoSelecionado) {
      setMensagemErro('Escolha um plano antes de avançar.');
      return;
    }

    // Redirecionar para a próxima etapa ou realizar outras ações conforme necessário
    // Neste exemplo, estamos apenas redirecionando de volta para a página de cadastro recrutador
    history.push('/cadastro-recrutador');
  };

  return (
    <div className="planos-recrutador-container">
      <h1 className="planos-recrutador-title">Planos Empresariais</h1>
      <p className="planos-recrutador-subtitle">Escolha o seu plano inicial</p>

      <div
        className={`plano ${planoSelecionado === 'Essencial Recruit' ? 'plano-selecionado' : ''}`}
        onClick={() => handlePlanoClick('Essencial Recruit')}
      >
        <h2>Essencial Recruit</h2>
        <p>Direito ao anúncio de 5 vagas SIMULTÂNEAS</p>
        <p>R$ 89,90 / MÊS</p>
      </div>

      <div
        className={`plano ${planoSelecionado === 'Pro-Recruit Plus' ? 'plano-selecionado' : ''}`}
        onClick={() => handlePlanoClick('Pro-Recruit Plus')}
      >
        <h2>Pro-Recruit Plus</h2>
        <p>Direito ao anúncio de 10 vagas SIMULTÂNEAS</p>
        <p>TESTE GRÁTIS POR 1 MÊS</p>
        <p>R$ 109,90 / MÊS</p>
      </div>

      <div
        className={`plano ${planoSelecionado === 'Elite-Hire Pro' ? 'plano-selecionado' : ''}`}
        onClick={() => handlePlanoClick('Elite-Hire Pro')}
      >
        <h2>Elite-Hire Pro</h2>
        <p>Anúncio de vagas ILIMITADO</p>
        <p>TESTE GRÁTIS POR 1 MÊS</p>
        <p>R$ 149,90 / MÊS</p>
      </div>

      <button className="planos-recrutador-button" onClick={handleAvancarClick}>
        Avançar
      </button>

      {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
    </div>
  );
};

export default PlanosRecrutador;
