import React, { Component } from 'react';
import { WiMoonFirstQuarter } from 'react-icons/wi';
import { FiSidebar, FiArrowLeft } from 'react-icons/fi';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: {
                background: '',
                header: '',
                font: '',
            },
            sidebar: false,
        }

        this.showSide = this.showSide.bind(this);
    }

    showSide() {
        this.props.showBar();

    }

    render() {
        return (
            <div className="header">    
                <nav>
                    <div>
                        <a href='/'>
                            <FiArrowLeft size='25' color='white'/>
                        </a>
                    </div>
                    <section>
                        <button>
                            <WiMoonFirstQuarter className='icon-navbar' size='25' />
                        </button>
                        <button onClick={() => this.showSide()}>
                            <FiSidebar size='25' color='white' />
                        </button>

                    </section>
                </nav>
            </div>
        );
    }
}

export default Header;