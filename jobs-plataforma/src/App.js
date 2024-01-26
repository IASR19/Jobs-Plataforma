import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import CadastroRecrutador from './components/Cadastro/CadastroRecrutador';
import PlanosRecrutador from './components/Cadastro/PlanosRecrutador';
import CadastroCandidato from './components/Cadastro/CadastroCandidato';
import CadastroCurriculo from './components/Cadastro/CadastroCurriculo';

function App() {
  return (
    <Router>
      <div>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/cadastro-recrutador" exact component={CadastroRecrutador} />
        <Route path="/planos-recrutador" exact component={PlanosRecrutador} />
        <Route path="/cadastro-candidato" exact component={CadastroCandidato} />
        <Route path="/cadastro-curriculo" exact component={CadastroCurriculo} />

        
      </div>
    </Router>
  );
}

export default App;
