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
            }, 
            sidebar: false,
        }

        this.showSideBar = this.showSideBar.bind(this);
    }

    showSideBar(){
        const {sidebar} = this.state;

        if(sidebar){
            this.setState({sidebar: false});
        }else{

            this.setState({sidebar: true});
        }

    }

    render() {
        return (
            <div className="header">
                <nav>
                    <div></div>
                    <section>
                        <button>
                            <WiMoonFirstQuarter className='icon-navbar' size='25' />
                        </button>
                        <button>
                            <FiSidebar size='25' color='white' onClick={this.showSideBar} />
                        </button>

                    </section>
                </nav>
            </div>
        );
    }
}

export default Header;