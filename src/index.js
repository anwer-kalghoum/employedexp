import React from 'react';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'

import 'kea-saga'

import { store, history } from './store'


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router>
                <App />
            </Router>
        </ConnectedRouter>
    </Provider>,
     document.getElementById('root'));



  