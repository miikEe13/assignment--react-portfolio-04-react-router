import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import './css/styles.css';

import registerServiceWorker from './registerServiceWorker';

class AppWithRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
registerServiceWorker();
