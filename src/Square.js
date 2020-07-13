import React from 'react'
class Square extends React.Component{
          constructor(props){
                    super(props)
                              this.state= {
                                        value:""
                              }
                    }
          handlState= ()=>{
                    this.setState({
                              value : 'X'
                    })
          }
          render(){
                    return (
                 
                              <button className="square" onClick={()=>this.handlState()}>
                                        {this.state.value}
                              </button>
                  
                    )
          }
          
}
export default Square