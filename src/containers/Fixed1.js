import React, {Component} from 'react';
class Fixed1 extends Component{
    constructor(props){
        super(props);
    }



render(){
    return(
        <div>
    <div class="row" style={{marginBottom:0}}>
        <div class= "col l12 s12 blue darken-3 white-text">
         <h4 style={{marginleft:"50px"}}>LoanDost</h4>
         <h5 style={{marginleft:"50px"}}>IS THE RIGHT CHOICE FOR YOU IF</h5>
        </div>
    </div>
       <div class="row" style={{marginBottom:0}}>    
        <div class="col l6 s6 blue darken-3 white-text">
    
            <div class="">
            
             <ul><h5 style={{fontSize:"25px"}} >< img src={require('./images/tick.png')}/> YOU ARE 23 OR OLDER</h5>
               <h6 style={{marginLeft:"40px"}}>the minimum age to use our service is 23</h6></ul>
                    
                                    
                    <ul><h5 style={{fontSize:"25px"}}>< img src={require('./images/tick.png')}/>YOU ARE AN INDIAN RESIDENT</h5>
                        <h6 style={{marginLeft: "40px"}}> be a current resident of India</h6></ul>
                                    
                   
                                    
                    <ul><h5 style={{fontSize:"25px"}}>< img src={require('./images/tick.png')}/>YOU HAVE A BANK ACCOUNT</h5>
                        <h6 style={{marginLeft: "40px"}} > You need an active Indian bank account to allow the money to be transferred to you</h6></ul>
                        <h1></h1>
            </div>

</div>
<div class="col l6 s6 blue darken-3 white-text">
        <div class="center-align">

            <ul> <h5 style={{marginTop:20}}>< img src={require('./images/tick.png')}/>ARE HONEST & TRUSTWORTHY</h5>  
             <h6 style={{marginLeft:""}}>You definitely have to be a nice person.</h6></ul>
        
  

            <ul><h5 style={{fontSize:"25px"}}>< img src={require('./images/tick.png')}/>YOU HAVE A VALID ADDRESS</h5>
                <h6 style={{marginLeft:""}}>Must be a current resident of India</h6></ul>

            <ul><h5 style={{fontsize:"25px"}}>< img src={require('./images/tick.png')}/>YOU HAVE A REGULAR INCOME</h5>

            <h6 style={{marginLeft:40}}>You must have an income every month whether it be benefits or a job</h6></ul>
        
            <h1></h1>
        </div>
</div>
</div>
</div>






    )
  }

}
export default Fixed1;
