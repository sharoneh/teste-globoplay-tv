import React, { Component } from 'react';
import '../styles/App.scss';
import logoBbb from '../images/logo-bbb.png';
import logoGloboPlay from '../images/globoplay.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <svg height="100" width="200" fill="white">
            <use xlinkHref={`${logoGloboPlay}#logo_globoplay`} />
          </svg>
        </div>

        <div className="content">
          <img className="logo" src={logoBbb} alt="Big Brother Brasil"/>
          
          <h1>Acompanhe 24h ao vivo a casa mais vigiada do Brasil</h1>
  
          <button>Assista</button>
          
          <button>Veja mais</button>
        </div>
      </div>
    )
  }
}

export default App
