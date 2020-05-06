import React, { Component } from 'react';

import './global.css';

import './App.css';

import imgCronometro from './assets/cronometro.png';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0,
      bntStart: 'Start'
    }

    this.timerOn = null;

    this.startCronometro = this.startCronometro.bind(this)
    this.resetCronometro = this.resetCronometro.bind(this)

  }

  resetCronometro() {
    if (this.timerOn) {
      clearInterval(this.timerOn)
      this.timerOn = null;
      this.setState({ bntStart: 'Start' })
    }
    this.setState({contador: 0})
  }

  startCronometro() {

    if (this.timerOn) {
      clearInterval(this.timerOn)
      this.timerOn = null;
      this.setState({ bntStart: 'Start' })
    }
    else {
      this.timerOn = setInterval(() => {
        let state = this.state;
        state.contador += 0.010;
        this.setState(state);
      }, 10);
      this.setState({ bntStart: 'Stop' })
    }

  }

  render() {
    return (
      <div className='App'>
        <figure>
          <img src={imgCronometro} alt="" />
          <figcaption>{this.state.contador.toFixed(2)}</figcaption>
        </figure>

        <div className='controllers'>
          <button onClick={this.startCronometro}>{this.state.bntStart}</button>
          <button onClick={this.resetCronometro}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;