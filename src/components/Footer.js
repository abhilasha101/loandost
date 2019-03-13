import React , {Component} from 'react';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state={buttonLabel:"login"}
}
clickbutton = () => {
    this.setState({buttonLabel:"Logout"})
}
   
    render(){

        return(
            <div>
              <h1> this is footer </h1>
              <button onClick={this.clickbutton}>{this.state.buttonLabel}</button>
            
              </div>
            

        )
    }
}
export default Footer;