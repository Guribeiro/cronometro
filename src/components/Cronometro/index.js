import React, { Component, Fragment } from 'react';
import './styles.scss';

import { FiZoomIn, FiZoomOut } from 'react-icons/fi'

import Header from '../Header';
import MenuBar from '../../components/MenuBar';


class Cronometro extends Component {
    constructor(props) {
        super()
        this.state = {
            cronometro: 0,
            sidebar: false
        }
        this.timer = null;
        this.startCronometro = this.startCronometro.bind(this);
        this.redefinirCronometro = this.redefinirCronometro.bind(this);
        this.showSideBar = this.showSideBar.bind(this);
    }

    startCronometro() {

        if (this.timer !== null) {

            clearInterval(this.timer);
            this.timer = null;
        } else {

            this.timer = setInterval(() => {
                const timer = this.state.cronometro;
                this.setState({ cronometro: timer + 0.01 })
            }, 10)
        }
    }

    redefinirCronometro() {
        this.setState({ cronometro: 0 })
    }

    showSideBar() {

        const { sidebar } = this.state;

        if (sidebar) {
            this.setState({ sidebar: false });
        } else {

            this.setState({ sidebar: true });
        }

    }

    render() {

        const { sidebar } = this.state;
        return (
            <Fragment>
                <Header showBar={this.showSideBar} />

                <div className='panel-container'>
                    {
                        sidebar ? <MenuBar /> : ''
                    }

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
                                <span>{this.state.cronometro.toFixed(2)}</span>
                            </div>

                            <div className="buttons">
                                <button onClick={this.redefinirCronometro} className='reset-button'>Redefinir</button>
                                <button onClick={this.startCronometro} className='start-button'>Iniciar</button>
                            </div>
                        </div>
                    </section>
                </div>
            </Fragment>

        );
    }
}

export default Cronometro;