import React from 'react'; // object React from module react
import ReactDOM from 'react-dom';
import './CSS/index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const element = <h1>pozdrav svete</h1>;

ReactDOM.render(element, document.getElementById('root'));
console.log(element);

serviceWorker.register();
