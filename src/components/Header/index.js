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
        
    }

   

    render() {
        return (
            <div className="header">
                <nav>
                    <div></div>
                    <section>
                        <a href="/" >
                            <WiMoonFirstQuarter className='icon-navbar' size='25' />
                        </a>
                        <a href="/">
                            <FiSidebar size='25' color='white' />
                        </a>

                    </section>
                </nav>
            </div>
        );
    }
}

export default Header;