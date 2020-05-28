import React, { Component } from 'react';
import './style.scss';

import { IoIosTimer, IoIosClock } from 'react-icons/io'
import { FiZoomIn, FiZoomOut } from 'react-icons/fi'

import { Link } from 'react-router-dom';

class Relogio extends Component {
    constructor(props) {
        super()
        this.state = {
            timer: '',
            fontsize: 0
        }

        this.intervalTime = this.intervalTime.bind(this);
        this.mountHour = this.mountHour.bind(this);
        
    }

    mountHour(){
        const date = new Date();
        const hour = {
            hora: date.getHours(),
            minutos: date.getMinutes(),
            segundos: date.getSeconds()
        }

        return hour
    }

    intervalTime(){
        setInterval(() =>{
            const timer = this.mountHour();
            const {hora, minutos, segundos} = timer;

            const horaAtual = `${hora}:${minutos}:${segundos}`;

            this.setState({timer: horaAtual})
        },1000);
    }

    componentDidMount(){
        this.intervalTime();
        
    }



    render() {
        return (

            <div className='panel-container'>
                <section className='menu-bar'>
                    <ul>
                        <li className='link-cronometro'>
                            <Link to="/cronometro">
                                <IoIosTimer size='32' />
                                <span>Cronômetro</span>
                            </Link>

                        </li>

                        <li className='link-relogio'>
                            <Link to="/relogio">
                                <IoIosClock size='32' />
                                <span>Relógio</span>
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className='content'>
                    <div className="controls">
                        <div className="option">
                            <button>
                                <FiZoomIn size='24' />
                            </button>
                        </div>
                        <div className="option">
                            <button>
                                <FiZoomOut size='24' />
                            </button>
                        </div>

                    </div>
                    <div className='clock-container'>
                        <div className="timer">
                            <span id='clock'>{this.state.timer}</span>
                        </div>
                    </div>
                </section>
            </div>


        );
    }
}

export default Relogio;