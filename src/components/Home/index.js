import React, { Component, Fragment } from 'react';
import './styles.scss';

import { IoIosTimer, IoIosClock } from 'react-icons/io'

import { Link } from 'react-router-dom';



class Home extends Component {




    render() {


        return (

            <Fragment>

                <div className='home'>
                    
                    <div className="options-service">
                        <div className="option">
                            <Link to='/relogio'>
                                <IoIosClock />
                                <strong>Relógio</strong>
                            </Link>
                        </div>

                        <div className="option">
                            <Link to='/cronometro'>
                                <IoIosTimer />
                                <strong>Cronômetro</strong>
                            </Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Home;