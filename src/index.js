import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//NPM INSTALL --SAVE REACT-ROUTER-DOM
import {BrowserRouter as Router} from 'react-router-dom';
import {ProductProvider} from './context';

import * as serviceWorker from './serviceWorker';



//using context api and react router
ReactDOM.render(
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
