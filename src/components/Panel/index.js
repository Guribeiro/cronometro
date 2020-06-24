import React, { Component } from 'react';

import Routes from '../../routes';

class Panel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            timer: ''
        }
    }

    render() {
        return (
            <Routes />
        );
    }
}

export default Panel;