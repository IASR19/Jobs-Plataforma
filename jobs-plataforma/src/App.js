import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';

function App() {
  return (
    <Router>
      <div>
        {/* Redirecionar "/" para "/login" */}
        <Redirect exact from="/" to="/login" />

        {/* Rota para o componente Login */}
        <Route path="/login" exact component={Login} />

        {/* Rota para o componente Cadastro */}
        <Route path="/cadastro" exact component={Cadastro} />
      </div>
    </Router>
  );
}

export default App;
