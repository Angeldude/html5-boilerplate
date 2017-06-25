
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import About from './pages/About/About';

import "./App.css";

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home as any}/>
            <Route exact path="/about" component={About as any}/>
            <Route component={NotFound as any}/>
        </Switch>
    </BrowserRouter>
), document.getElementById('root'))
