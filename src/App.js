import React, { Component } from 'react';
//import logo from './logo.svg';

import  './Style.css';




import Contactus from './containers/Contactus.js'
import Home from './containers/Home';
import Bg from './containers/Bg';
import Footer from './containers/Footer';
import Form from './containers/Form';
import Fixed from './containers/Fixed';
import Fixed1 from './containers/Fixed1';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      
      
      <div className="App">
      
      <Home/>
      <Bg />
      <Form />
      <Fixed1 />
      <Fixed />

      
      
      
     
      
        <header className="App-header">
          
        
         
        
        </header>

        <Footer />
        
      
      </div>
    );
  }
}

export default App;
