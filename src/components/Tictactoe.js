import React, {Component} from 'react';

class Tictactoe extends Component{

    constructor(props){
        super(props);
        this.state={
            buttonLabel:["?","?","?","?","?","?","?","?","?"],
            count : 0,
            player1:"x",
            player2:"0"
         }

        }
       handleClick=(index)=>{
           
         

        if(this.state.buttonLabel[index]==="?"){
        
            let counter = this.state.count + 1
            if (counter%2==0){
        
           
            let newArr=[...this.state.buttonLabel]
               newArr[index] ="O"
           this.setState({buttonLabel:newArr, count:counter},this.onwinning)
        }else {
            let newArr=[...this.state.buttonLabel]
            newArr[index] ="X"
            this.setState({buttonLabel:newArr , count:counter},this.onwinning)
        }
       }
    }
    onwinning=()=>{
        if(
        (this.state.buttonLabel[0]=="X"&& this.state.buttonLabel[1]=="X"&& this.state.buttonLabel[2]=="X") ||
         (this.state.buttonLabel[0]=="X"&& this.state.buttonLabel[3]=="X"&& this.state.buttonLabel[6]=="X") ||
         (this.state.buttonLabel[0]=="X"&& this.state.buttonLabel[4]=="X"&& this.state.buttonLabel[8]=="X")||
         (this.state.buttonLabel[3]=="X"&& this.state.buttonLabel[4]=="X"&& this.state.buttonLabel[5]=="X")||
         (this.state.buttonLabel[6]=="X"&& this.state.buttonLabel[7]=="X"&& this.state.buttonLabel[8]=="X")||
         (this.state.buttonLabel[1]=="X"&& this.state.buttonLabel[4]=="X"&& this.state.buttonLabel[7]=="X")||
         (this.state.buttonLabel[2]=="X"&& this.state.buttonLabel[5]=="X"&& this.state.buttonLabel[8]=="X")||
         (this.state.buttonLabel[2]=="X"&& this.state.buttonLabel[4]=="X"&& this.state.buttonLabel[6]=="X"))
        {
      alert('xwon')}
      else if((this.state.buttonLabel[0]=="O"&& this.state.buttonLabel[1]=="O"&& this.state.buttonLabel[2]=="O") ||
      (this.state.buttonLabel[0]=="O "&& this.state.buttonLabel[3]=="O"&& this.state.buttonLabel[6]=="O") ||
      (this.state.buttonLabel[0]=="O"&& this.state.buttonLabel[4]=="O"&& this.state.buttonLabe[8]=="O")||
      (this.state.buttonLabel[3]=="O"&& this.state.buttonLabel[4]=="O"&& this.state.buttonLabel[5]=="O")||
      (this.state.buttonLabel[6]=="O"&& this.state.buttonLabel[7]=="O"&& this.state.buttonLabel[8]=="O")||
      (this.state.buttonLabel[1]=="O"&& this.state.buttonLabel[4]=="O"&& this.state.buttonLabel[7]=="O")||
      (this.state.buttonLabel[2]=="O"&& this.state.buttonLabel[5]=="O"&& this.state.buttonLabel[8]=="O")||
      (this.state.buttonLabel[2]=="O"&& this.state.buttonLabel[4]=="O"&& this.state.buttonLabel[6]=="O" ))
      
     {
         alert('OWON')

     }
         
    }

    render(){
        return(
                <div  >
                    <h1> tic tac toe </h1>
                   
                            
                
                 {
                    this.state.buttonLabel.map((val,index)=>{
                        return(
                            <span classname="bg">
                            
                                                      <span classname="button"> 
                                 {(index +1)% 3!=0?
                            <button onClick={()=>{this.handleClick(index)}}key= {index}> {val} </button>
                              :
                              <span>
                                  <button onClick={()=>{this.handleClick(index)}}key= {index}> {val} </button>
                                  <br></br>
                                  </span>
                                  

                          }
                                  
                          
                          </span>
                          </span>
                          
                        )
                    })
                }
                        
                </div>
           

        )
    }
    
    }
       
export default Tictactoe;