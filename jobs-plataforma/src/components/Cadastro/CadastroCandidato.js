import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CadastroCandidato.css';

const CadastroCandidato = () => {
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [areaInteresse, setAreaInteresse] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleCadastroClick = () => {
    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      setMensagemErro('As senhas não coincidem. Por favor, digite novamente.');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou realizar outras ações necessárias
    // Neste exemplo, estamos apenas redirecionando para a tela de planos-candidato após o cadastro
    history.push('/cadastro-curriculo');
  };

  const handleVoltarClick = () => {
    // Voltar para a tela de seleção (página inicial do cadastro)
    history.push('/cadastro');
  };

  return (
    <div className="cadastro-candidato-container">
      <h1 className="cadastro-candidato-title">Cadastro Candidato</h1>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

      <label htmlFor="sobrenome">Sobrenome</label>
      <input
        type="text"
        id="sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
        required
      />

      <label htmlFor="cpf">CPF</label>
      <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />

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

      <label htmlFor="areaInteresse">Área(s) de Interesse</label>
      <input
        type="text"
        id="areaInteresse"
        value={areaInteresse}
        onChange={(e) => setAreaInteresse(e.target.value)}
        required
      />

      <button className="cadastro-candidato-button" onClick={handleCadastroClick}>
        Avançar
      </button>

      <button className="cadastro-candidato-button" onClick={handleVoltarClick}>
        Voltar
      </button>

      {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
    </div>
  );
};

export default CadastroCandidato;
