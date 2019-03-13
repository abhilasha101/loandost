import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import Home from './containers/Home.js';
import Contactus from './containers/Contactus';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

 var MainApp=(
     <Router>
         <div>
             <Route exact path="/" component={App}/>
             <Route excat path="/Contactus" component={Contactus}/>
             </div>
         </Router>

 )
 ReactDOM.render(MainApp , document.getElementById('root'));
 serviceWorker.unregister();