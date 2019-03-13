import React ,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
   
    }


render (){
    return(

        <div class="row" style ={{marginBottom:0}}>
        <div class="col l12 s12 grey lighten-3 "> 
        <h4  style ={{marginLeft:'20px'}} > WE HAVE A SIMPLE ONLINE APPLICATION:</h4>
        
    
       <div class="margin">
       <h5 ><img src={require('./images/1.png')} height= "50"width="" />< span style={{marginleft:'100px'}}>FAST ONLINE INSTANT APPROVALS</span></h5>
        <p>We have simple online application. Our rates are often lower than the banks.</p>
        </div>

        <div class="margin">
        <h5><img src={require('./images/2.png')} height="50"/>FLEXIBLE WITH YOUR REPAYMENTS</h5>
        <p > Reschedule payments upto five days for free, we just need 24 hours notice</p>
        </div>
        <div class="margin"> 
                <h5><img src={require('./images/3.png')}  height="50"/>GOOD CREDIT HISTORY IS REWARDED</h5>
        <p >Loans are cheaper when you have good credit profile and you will build your history with us.</p>
        </div>
      </div>
    
    
        
    </div>

    )
}
}
export default Form;



