import React, { Component } from 'react';

import './global.scss';
import './App.scss';

import Panel from './components/Panel';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Panel />
      </div>
    );
  }
}

export default App;