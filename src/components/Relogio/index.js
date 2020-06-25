import React, { Component, Fragment } from 'react';
import './style.scss';

import Header from '../Header';
import MenuBar from '../MenuBar';
import Controls from '../Controls';


class Relogio extends Component {
    constructor(props) {
        super()
        this.state = {
            timer: '',
            sidebar: true,
        }

        this.intervalTime = this.intervalTime.bind(this);
        this.mountHour = this.mountHour.bind(this);
        this.showSideBar = this.showSideBar.bind(this);

    }

    mountHour() {
        const date = new Date();

        const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        const seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

        const hour = {
            hours,
            minutes,
            seconds
        }

        return hour
    }

    intervalTime() {
        setInterval(() => {
            const timer = this.mountHour();
            const { hours, minutes, seconds } = timer;

            const horaAtual = `${hours}:${minutes}:${seconds}`;

            this.setState({ timer: horaAtual })
        }, 1000);
    }

    componentDidMount() {
        this.intervalTime();

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
                        <Controls />
                        <div className='clock-container'>
                            <div className="timer">
                                <span id='clock'>{this.state.timer}</span>
                            </div>
                        </div>
                    </section>
                </div>

            </Fragment>
        );
    }
}

export default Relogio;
