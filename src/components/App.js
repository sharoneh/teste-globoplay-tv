import React, { Component } from 'react';
import '../styles/App.scss';
import Sidebar from './Sidebar';
import Main from './Main';
import Background from './Background';
import store from '../redux/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Sidebar />
  
          <Background />
        
          <Main />
        </div>
      </Provider>
    )
  }
}

export default App
