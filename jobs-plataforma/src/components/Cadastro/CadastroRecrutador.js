import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CadastroRecrutador.css';

const CadastroRecrutador = () => {
  const history = useHistory();

  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleCadastroClick = () => {
    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não coincidem. Por favor, digite novamente.');
      return;
    }

    // Redirecionar para a tela de planos-recrutador após o cadastro
    history.push('/planos-recrutador');
  };

  const handleVoltarClick = () => {
    // Voltar para a tela de seleção (página inicial do cadastro)
    history.push('/cadastro');
  };

  return (
    <div className="cadastro-recrutador-container">
      <h1 className="cadastro-recrutador-title">Cadastro Recrutador</h1>
      <label htmlFor="nomeEmpresa">Nome da Empresa</label>
      <input
        type="text"
        id="nomeEmpresa"
        value={nomeEmpresa}
        onChange={(e) => setNomeEmpresa(e.target.value)}
        required
      />
      <label htmlFor="cnpj">CNPJ</label>
      <input type="text" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required />
      <label htmlFor="email">E-mail</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <label htmlFor="confirmarSenha">Confirmar Senha</label>
      <input
        type="password"
        id="confirmarSenha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
        required
      />
      <button className="cadastro-recrutador-button" onClick={handleCadastroClick}>
        Avançar
      </button>
      <button className="cadastro-recrutador-button" onClick={handleVoltarClick}>
        Voltar
      </button>

      {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
    </div>
  );
};

export default CadastroRecrutador;
