import React, { Component } from 'react';
import { WiMoonFirstQuarter } from 'react-icons/wi';
import { FiSidebar } from 'react-icons/fi';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: {
                background: '',
                header: '',
                font: '',
            }
        }
        this.getColors = this.getColors.bind(this);
    }
    
    
    getColors(){
        const backcolor = window.getComputedStyle(document.body).getPropertyValue("background-color")

        alert('Cor de fundo: ' + backcolor)
    }
    
    render() {
        return (
            <div className="header">
                <div className="primeiro"></div>
                <nav>
                    <div className="container-menu">
                        <ul>
                            <li>
                                <a href="/">
                                    Feriados
                            </a>
                            </li>

                            <li>
                                <a href="/">
                                    Ferramentas
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div className="container-menu-config">
                        <ul>
                            <li>
                                <WiMoonFirstQuarter className='icon-menu' color='white' size='25' onClick={this.getColors}/>
                            </li>

                            <li>
                                <FiSidebar size='27' color='white' />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;