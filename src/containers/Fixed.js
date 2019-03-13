import React ,{Component} from 'react';

class Fixed extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

         <div class="row "style={{marginBottom:0}}>
            <div class ="col l6 s6 grey lighten-3">
         <h5 style={{marginBottom:'900px'}}> WHAT ARE YOU WAITING FOR?</h5> 
                 </div>
         
         
            
             <div class="col l6 s6 grey lighten-3">
             <img src={require('./images/mobilephone.png')} style={{marginBottom:'350px'}}/>
             </div>
         </div>




        )
    }
}

export default Fixed;