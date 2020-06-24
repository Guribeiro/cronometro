import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cronometro from './components/Cronometro';
import Relogio from './components/Relogio';
import Home from './components/Home';

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cronometro' component={Cronometro} />
                <Route path='/relogio' component={Relogio} />
            </Switch>
        </BrowserRouter>

    )
}
