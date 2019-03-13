import React,  {Component} from 'react';



class Bg extends Component{
    constructor(props){
        super(props);
    }


    render(){
       return(

        <div class="bgimag white-text">
        <h3 class="center-align" style={{margin:'0px'}} font-family="Roboto" font-weight="300">APPLY FOR LOAN </h3>
        <h3 class="center-align" style={{margintop:'20px'}} font-weight="600"><b>IN LESS THAN 25 MINUTES</b></h3>
        <h5 class="center-align" style={{marginbottom:'200px'}} style={{margintop:'100px' }}>GET MONEY IN YOUR ACCOUNT INSTANTLY </h5> 
                  
                   
    <div class="row">
        <div class="col l4 s4 center" ><img src={require('./images/icons.png')} style={{height:'100'}} width="100" alt="images"></img><h4 class="center">REGISTER</h4>  </div>
        <div class="col l4 s4 center"><img src="https://img.icons8.com/cotton/100/000000/inspection.png" style={{height:"100"}} width="100"></img><h4 class="center-align">QUICK VERIFICATION</h4></div>
         <div class="col l4 s4 center"><img src={require('./images/cash.png')} style={{height:"100"}} width="100"></img><h4 class="center-align">RECIEVE LOAN </h4></div>
                 
    </div>
        <div class="row">
            <div class="center-align">
                <a class="waves-effect waves-light btn-large"style={{margintop:"200px"}}> apply now</a>
            </div>
         </div>
                        
    </div>
    

       )
       
   }

}

export default Bg;