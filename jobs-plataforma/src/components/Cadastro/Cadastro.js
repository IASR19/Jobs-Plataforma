import React from 'react';
import './Cadastro.css';

const Cadastro = () => {
  return (
    <div className="cadastro-container">
      <h1 className="cadastro-title">Cadastro</h1>
      <p className="cadastro-label">O que você é?</p>
      <select className="cadastro-select">
        <option value="">Selecione...</option>
        <option value="CANDIDATO">CANDIDATO</option>
        <option value="RECRUTADOR">RECRUTADOR</option>
      </select>
      <button className="cadastro-button cadastro-button-primary">Avançar</button>
      <button className="cadastro-button cadastro-button-secondary">Voltar</button>
    </div>
  );
};

export default Cadastro;