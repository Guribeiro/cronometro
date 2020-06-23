import React, {Component} from 'react';
import './style.scss';

import { IoIosTimer, IoIosClock } from 'react-icons/io'

import { Link } from 'react-router-dom';

class MenuBar extends Component{

    render(){
        return(
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
        );
    }
}

export default MenuBar;