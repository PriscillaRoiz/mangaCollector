import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './componentes/Nav'
import PaginaInicial from './paginas/PaginaInicial' 
import Logar from "./paginas/Logar"
import SuaColecao from "./paginas/SuaColecao"

import './App.css';

function App() {
  return (
    <div>

    <Nav/>

    <Switch>
      <div>
        <Route exact path='/' component={PaginaInicial} />
        <Route path='/logar' component={Logar} />
        <Route path='/suaColecao' component={SuaColecao} />
      </div>
    </Switch>

    </div>
  );
}

export default App;
