import React from 'react'; // object React from module react
import ReactDOM from 'react-dom';
import './SCSS/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "font-awesome/css/font-awesome.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
