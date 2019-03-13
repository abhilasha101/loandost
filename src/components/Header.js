import React,  {Component} from 'react';

class Header extends Component{
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
            <h1> header </h1>
            
              <button onClick={this.clickbutton}>{this.state.buttonLabel}</button>
            
          </div>
                
        
        
        
        )

    }

}
export default Header;