import React from 'react'
import '../index.css'
import * as actionsLib from '../Redux/actions'
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

class Book extends React.Component{
          constructor(props){
                    super(props)
          }
          addToCart = (count)=>{
            console.log("entered in addToCart====",this.props.history.location);
            this.props.actions.addProductToCart({'count':count+1,'product':this.props.history.location.products})
          }
          render(){
                    console.log("entered in Book component====");
                    
                    return(
                              <div className="book-container">
                                  <div className="left-container">
                                    <img src= {this.props.history.location.data}/>
                              </div>
                             <div className="right-container">
                                   <button onClick={()=>this.addToCart(this.props.history.location.count)}>AddToCart</button>
                             </div>
                             </div>
                    )
          }
}
const mapStateToProps  = (state)=>({
      store : state
   })
   const mapDispatchToProps = (dispatch)=>({
     actions :bindActionCreators(actionsLib,dispatch)
   })
   export default connect(mapStateToProps,mapDispatchToProps)(Book)