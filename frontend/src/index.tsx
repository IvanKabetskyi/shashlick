import React from 'react';
import ReactDOM from 'react-dom';

import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';

import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import store from './app/store';

import 'antd/dist/antd.css';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
