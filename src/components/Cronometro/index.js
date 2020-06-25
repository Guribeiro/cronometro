import React, { Component, Fragment } from 'react';
import './styles.scss';

import Header from '../Header';
import MenuBar from '../MenuBar';
import Controls from '../Controls';


class Cronometro extends Component {
    constructor(props) {
        super()
        this.state = {
            miliSeconds: 0,
            seconds: 0,
            minutes: 0,

            stopwatch: 0,

            btnStart: 'Iniciar',
            sidebar: true
        }
        this.timer = null;

        this.startCronometro = this.startCronometro.bind(this);
        this.redefinirCronometro = this.redefinirCronometro.bind(this);
        this.showSideBar = this.showSideBar.bind(this);
    }

    startCronometro() {

        if (this.timer) {

            clearInterval(this.timer);
            this.timer = null;
            this.setState({ btnStart: 'Iniciar' })

        } else {

            this.timer = setInterval(() => {
                const { miliSeconds, seconds, minutes } = this.state;

                this.setState({
                    miliSeconds: miliSeconds + 1,
                    btnStart: 'Pausar'
                })

                if (miliSeconds > 99) {
                   
                    this.setState({
                        miliSeconds: 0,
                        seconds: seconds + 1
                    })
                }

                if (seconds > 59) {
                    this.setState({
                        seconds: 0,
                        minutes: minutes + 1
                    })
                }

                const stopwatch = {
                    miliSeconds,
                    seconds,
                    minutes,

                }


                this.setState({
                    stopwatch: stopwatch
                })

            }, 10)
        }
    }

    redefinirCronometro() {


        this.setState({
            miliSeconds: 0,
            seconds: 0
        })
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

        const { sidebar, btnStart, stopwatch } = this.state;

        const { miliSeconds, seconds, minutes } = stopwatch;


        return (
            <Fragment>
                <Header showBar={this.showSideBar} />

                <div className='panel-container'>
                    {
                        sidebar ? <MenuBar /> : ''
                    }

                    <section className='content'>
                        <Controls />
                        <div className='clock-container'>

                            <div className="timer">
                                <span>{minutes}</span>
                                <span>{seconds}</span>
                                <span>{miliSeconds}</span>
                            </div>

                            <div className="buttons">
                                <button onClick={this.redefinirCronometro} className='reset-button'>Redefinir</button>
                                <button onClick={this.startCronometro} className='start-button'>{btnStart}</button>
                            </div>
                        </div>
                    </section>
                </div>
            </Fragment>

        );
    }
}

export default Cronometro;