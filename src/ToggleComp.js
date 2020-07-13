import React from 'react'
import toggle from './ToggleComp'
class ToggleComp extends React.Component{
          constructor(props){
                    super(props)
                    this.state={
                              status :false
                    }
          }
           handleClick = ()=>{
                    console.log("entered in handle click---");
                    this.setState({
                             status : !this.state.status
                    })
                    
          }
          render(){
                    return(
                              <div>
                                        {this.state.staus?<p>{'ON'}</p>:<p>{'OFF'}</p>}
                                        <toggle onclick={this.handleClick} />
                              </div>
                    )
          }
}

export default ToggleComp