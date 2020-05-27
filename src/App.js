import React, { Component } from 'react';

import './global.scss';
import './App.scss';

import Header from './components/Header';
import Panel from './components/Panel';



class App extends Component {
  
  render() {
    return (
      <div className='App'>
        <Header/>
        <Panel />
      </div>
    );
  }
}

export default App;