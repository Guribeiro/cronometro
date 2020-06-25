import React from 'react';
import { Component } from 'react';
import './style.scss';

import { FiZoomIn, FiZoomOut } from 'react-icons/fi'

export default class Controls extends Component {

    render() {
        return (
            <div className="controls">
                <div className="option">
                    <button>
                        <FiZoomIn size='24' />
                    </button>
                </div>
                <div className="option">
                    <button>
                        <FiZoomOut size='24' />
                    </button>
                </div>
            </div>
        )
    }
}