import React, { Component } from 'react';
import '../styles/App.scss';
import logoGloboPlay from '../images/globoplay.svg';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      
        <div>
          <header>
            <svg height="100" width="200" fill="white">
              <use xlinkHref={`${logoGloboPlay}#logo_globoplay`} />
            </svg>
          </header>
  
          <Main />
        </div>
      </div>
    )
  }
}

export default App
