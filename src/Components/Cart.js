import React from 'react'
import { bindActionCreators } from 'redux'
import * as actionLib from '../Redux/actions'
import {connect} from 'react-redux'

class Cart extends React.Component{
          constructor(props){
                    super(props)
          }

    render() {
              console.log("this.props.storee",this.props.store.products);
              
                    return(
                    <div className="cart-container">
                          {
                          this.props.store.products.products.map((product)=>{
                                    return(
                                        <div>
                                        <img src ={product} style={{height:"200px",width:"150px"}}/>
                                        <hr/>
                                        </div>
                                    )
                            })
                          }
                    </div>
                    )
          }
}
const mapStateToProps = (state)=>({
          store:state
})
const mapDispatchToProps = (dispatch)=>({
          actions:bindActionCreators(actionLib,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart);