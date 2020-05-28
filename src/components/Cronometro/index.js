import React, { Component } from 'react';
import './styles.scss';

import { IoIosTimer, IoIosClock } from 'react-icons/io'
import { FiZoomIn, FiZoomOut } from 'react-icons/fi'

import {Link} from 'react-router-dom';

class Cronometro extends Component {
    constructor(props) {
        super()
        this.state = {
            timer: 'Cronometro'
        }
    }

    render() {
        return (
            <div className='panel-container'>
                <section className='menu-bar'>
                    <ul>
                        <li>
                            <Link to="/cronometro">
                                <IoIosTimer size='32' />
                                <span>Cronômetro</span>
                            </Link>

                        </li>

                        <li>
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
                            <a href="/">
                                <FiZoomIn size='24' />
                            </a>
                        </div>
                        <div className="option">
                            <a href="/">
                                <FiZoomOut size='24' />
                            </a>
                        </div>

                    </div>

                    <div className='clock-container'>

                        <div className="timer">
                            <span>{this.state.timer}</span>
                        </div>

                        <div className="buttons">
                            <button className='reset-button'>Redefinir</button>
                            <button className='start-button'>Iniciar</button>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default Cronometro;