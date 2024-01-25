import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro/Cadastro';
import CadastroCandidato from './components/Cadastro/CadastroCandidato';
import CadastroRecrutador from './components/Cadastro/CadastroRecrutador';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Cadastro} />
      <Route path="/cadastro-candidato" exact component={CadastroCandidato} />
      <Route path="/cadastro-recrutador" exact component={CadastroRecrutador} />
    </Router>
  );
}

export default App;
