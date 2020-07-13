import React from 'react'
import '../index.css'
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
import * as actionsLib from '../Redux/actions'
import {bindActionCreators} from "redux"
import { connect } from "react-redux"
import {
  withRouter
} from 'react-router-dom'
class Navbar extends React.Component{
          constructor(props){
                    super(props);
                    this.state={
                    cartItems:[],
                    count:0
            }
          }
          componentWillMount(){
                    console.log("entered in componentWillMount Navbar");
                    let cart_items =    this.props.store.products.count
                    this.setState({
                      count :cart_items?cart_items.length:0,
                      cartItems:Number(cart_items)
                    })
          }
  handleClick = () => {
    console.log("entered in handleclick Navbar====", this.props);
    this.props.history.push ('/cart')
  }
  componentDidUpdate() {
    console.log("entered in componentDidUpdate");
    
  }
          componentWillReceiveProps(newprops){
                  console.log("entered in componentWillReceiveProps Navbar",newprops);
                  let cart_items =    newprops.store.products.count
                  this.setState({
                    count:cart_items?cart_items.length:0,
                    cartItems:cart_items
                  })
               }
          render(){
                    console.log("entere in Navbar-------");
                    return(
                              <div className="nav-container">
                              <div className="nav-bar-left">
                              
                               <ul>
                               
                                 <li>
                               Sell
                                 </li>
                                 <li> Customer Service</li>
                                 <li> Buy again</li>
                                 <li> Today's Deala</li>
                                
                               </ul>
                                  </div>
                                <div className="nav-bar-right">
                                <NotificationBadge  count={this.state.cartItems} effect={Effect.SCALE}/>
                              {/* <span onClick = {()=>this.handleClick()}>
                                <i  className="fa fa-shopping-cart"  style={{fontSize:"40px", float:"right"}} ></i>
                                </span> */}
                          <span style={{ position: "relative",left: "90%",bottom: "27px"}}name = "type" onClick = {this.handleClick} ><i className="fa fa-shopping-cart"></i></span>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
