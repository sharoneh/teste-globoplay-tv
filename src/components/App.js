import React, { Component } from 'react';
import '../styles/App.scss';
import Sidebar from './Sidebar';
import Main from './Main';
import Background from './Background';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { highlightNavigation, sidebarNavigation, railNavigation } from '../redux/AppReducer';

class App extends Component {
  componentDidMount() {
    sidebarNavigation()
    highlightNavigation()
    railNavigation()
  }

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
