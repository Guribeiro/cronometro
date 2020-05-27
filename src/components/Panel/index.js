import React, { Component } from 'react';

import { IoIosTimer, IoIosClock } from 'react-icons/io'
import { FiZoomIn, FiZoomOut } from 'react-icons/fi'

class Panel extends Component {

    render() {
        return (
            <div className='panel-container'>
                <section className='menu-bar'>
                    <ul>
                        <li>
                            <a href="/">
                                <IoIosTimer size='32' />
                                <span>Cronômetro</span>
                            </a>

                        </li>

                        <li>
                            <a href="/">
                                <IoIosClock size='32' />
                                <span>Relógio</span>
                            </a>
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
                            <span>TIMER HERE</span>
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

export default Panel;