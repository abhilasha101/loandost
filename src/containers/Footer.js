import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
      super(props);
      
  }
  
  
     
      render(){
  
          return(
              
            <footer class="page-footer">
            <div class="container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">DOWNLOAD APP</h5>
                  <p class="grey-text text-lighten-4"></p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <h5 class="white-text">Links</h5>
                  <ul>
                    <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Contact us</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">About us</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">FAQs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="container">
              © 2014 Copyright Text
              <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
              </div>
            </div>
          </footer>
              
  
          )
      }
  }


  export default Footer;