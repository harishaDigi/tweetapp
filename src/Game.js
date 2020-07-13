import React from 'react'
import Board from './Board'
class Game extends React.Component{
          constructor(props){
                    super(props)
          }
          render(){
                    let a =['a','b','c']
                    return(
                              <div style={{margin:"10px"}}>
                                    {
                                              a.map(q=><p>q</p>)
                                    }
                              </div>
                    )
          }
}
export default Game