import React , {Component} from 'react';
import {Link } from "react-router-dom";

class Contactus extends Component{
  constructor(props){
    super(props);
    
}


   
    render(){

        return(
            <div>
            
            <div class="navbar-fixed">
            <nav>
              <div class="nav-wrapper">
                <a href="#!" class="brand-logo">LoneDost</a>
                    <ul class="right hide-on-med-and-down">
                        <li><Link to="/">HOME</Link></li>
                        <li><a href="aboutus.html">ABOUT US</a></li>
                        <li><a href="FAQS.html"> FAQS</a></li>
                        <li><Link to="/Contactus"> CONTACT US</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
                
            <div class="row">
              <div class="col l12 s12 blue darken-3 white-text">
              <h1> Contact Us </h1>
              <h5> leave us your details we will call you </h5>
              </div>
            
              </div>
              </div>
              
            

        )
    }
}
export default Contactus;