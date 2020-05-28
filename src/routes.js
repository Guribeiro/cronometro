import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cronometro from './components/Cronometro';
import Relogio from './components/Relogio';

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path='/cronometro' component={Cronometro} />
                <Route path='/relogio' component={Relogio} />
            </Switch>
        </BrowserRouter>

    )
}
