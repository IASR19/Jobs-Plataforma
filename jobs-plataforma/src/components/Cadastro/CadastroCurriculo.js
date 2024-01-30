import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './CadastroCurriculo.css';

const CadastroCurriculo = () => {
  const history = useHistory();

  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [formacao, setFormacao] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [habilidades, setHabilidades] = useState('');
  const [cursosComplementares, setCursosComplementares] = useState('');
  const [idiomaSelecionado, setIdiomaSelecionado] = useState('');
  const [nivelSelecionado, setNivelSelecionado] = useState('Básico');
  const [idiomasRegistrados, setIdiomasRegistrados] = useState([]);
  const [mensagemErro, setMensagemErro] = useState('');

  const sugestoesIdiomas = ['Inglês', 'Espanhol', 'Francês', 'Alemão', 'Italiano', 'Outro'];

  const handleIdiomasChange = (event) => {
    setIdiomaSelecionado(event.target.value);
  };

  const handleNivelChange = (event) => {
    setNivelSelecionado(event.target.value);
  };

  const handleRegistrarIdioma = () => {
    if (!idiomaSelecionado) {
      setMensagemErro('Selecione um idioma antes de registrar.');
      return;
    }

    const novoIdioma = { idioma: idiomaSelecionado, nivel: nivelSelecionado };
    setIdiomasRegistrados([...idiomasRegistrados, novoIdioma]);
    setIdiomaSelecionado('');
    setNivelSelecionado('Básico');
    setMensagemErro('');
  };

  const handleCadastroClick = async () => {
    const curriculoData = {
      telefone,
      endereco,
      formacao,
      experiencia,
      habilidades,
      cursosComplementares,
      idiomasRegistrados,
    };

    try {
      await axios.post('http://localhost:5000/api/saveOption', { tipo: 'CANDIDATO', curriculoData });
      history.push('/login');
    } catch (error) {
      console.error('Erro ao salvar dados:', error.message);
      setMensagemErro('Erro ao salvar dados. Por favor, tente novamente.');
    }
  };

  const handleVoltarClick = () => {
    history.push('/cadastro');
  };

  return (
    <div className="cadastro-curriculo-container">
      <h1 className="cadastro-curriculo-title">Cadastro de Currículo</h1>

      <label htmlFor="telefone">Telefone</label>
      <input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />

      <label htmlFor="endereco">Endereço</label>
      <input type="text" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

      <label htmlFor="formacao">Formação</label>
      <input type="text" id="formacao" value={formacao} onChange={(e) => setFormacao(e.target.value)} />

      <label htmlFor="experiencia">Experiência</label>
      <textarea id="experiencia" value={experiencia} onChange={(e) => setExperiencia(e.target.value)}></textarea>

      <label htmlFor="habilidades">Habilidades</label>
      <textarea id="habilidades" value={habilidades} onChange={(e) => setHabilidades(e.target.value)}></textarea>

      <label htmlFor="cursosComplementares">Cursos Complementares</label>
      <textarea
        id="cursosComplementares"
        value={cursosComplementares}
        onChange={(e) => setCursosComplementares(e.target.value)}
      ></textarea>

      <label htmlFor="idiomas">Idiomas</label>
      <select id="idiomas" value={idiomaSelecionado} onChange={handleIdiomasChange}>
        <option value="" disabled>
          Selecione um idioma
        </option>
        {sugestoesIdiomas.map((idioma) => (
          <option key={idioma} value={idioma}>
            {idioma}
          </option>
        ))}
      </select>

      <label htmlFor="niveis">Nível</label>
      <select id="niveis" value={nivelSelecionado} onChange={handleNivelChange}>
        <option value="Básico">Básico</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>

      <button onClick={handleRegistrarIdioma}>Registrar Idioma</button>

      {/* Lista de idiomas registrados */}
      <div>
        <h3>Idiomas Registrados:</h3>
        <ul>
          {idiomasRegistrados.map((idioma, index) => (
            <li key={index}>
              {idioma.idioma} - Nível {idioma.nivel}
            </li>
          ))}
        </ul>
      </div>

      <button className="cadastro-curriculo-button" onClick={handleCadastroClick}>
        Avançar
      </button>

      <button className="cadastro-curriculo-button" onClick={handleVoltarClick}>
        Voltar
      </button>

      {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}
    </div>
  );
};

export default CadastroCurriculo;
