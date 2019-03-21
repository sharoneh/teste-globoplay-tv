import React, { Component } from 'react';
import '../styles/App.scss';
import Sidebar from './Sidebar';
import Main from './Main';
import Background from './Background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />

        <Background />
      
        <Main />
      </div>
    )
  }
}

export default App
