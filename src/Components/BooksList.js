import React from 'react'
import '../index.css'
import Slider from "react-slick";
import book1 from "./images/book1.jpg"
import book2 from "./images/book2.jpg"
import book3 from "./images/book3.jpg"
import book4 from "./images/book4.jpg"
import book5 from "./images/book5.jpg"
import book6 from "./images/book6.jpg"
import * as actionsLib from '../Redux/actions'
import {bindActionCreators} from "redux"

import {connect} from "react-redux"
class BooksList extends React.Component{
          constructor(props){
                    super(props);
                    this.state={
                    books :[book1,book2,book3,book4,book5,book6],
                    count :0,
                    cartItems:[],
                    products:[]
                    }
          }
          handleClick = (e)=>{
            console.log("entered in handlecclick event====,",e.target);
            this.props.history.push({
              pathname:"/book",
              data:e.target.src,
              count:Number(this.state.cartItems),
              products:[...this.state.products,e.target.src]
            })
         // this.props.actions.addProductToCart(this.state.cartItems+1)
            
          }
   
          componentWillMount(){
            console.log("entered in componentWillMount BooksList");
            let cart_items =    this.props.store.products.count
            this.setState({
              count :cart_items?cart_items.length:0,
              cartItems:Number(cart_items),
              products: this.props.store.products.products
            })
         }
         componentWillReceiveProps(newprops){
          console.log("entered in componentWillReceiveProps BooksList",newprops);
          let cart_items =    newprops.store.products.count
          this.setState({
            count:cart_items?cart_items.length:0,
            cartItems:cart_items,
            products: this.props.store.products.products
          })
       }
          render(){
            console.log("this.state========",this.state);
            
          console.log("This.props.store========",this.props.store);
          
                    var settings = {
                              dots: true,
                              infinite: true,
                              speed: 500,
                              slidesToShow: 5,
                              slidesToScroll: 1
                            };
                    return(
                           <div>
                            
                              <div className="books-container">
                          <div className="slide-container">
                              <Slider {...settings} >{
                                  this.state.books.map((book) => {
                                    return  (<div>
                                                   <img  onClick={this.handleClick} className ="book-item" src ={book} style={{"width":"130px","height":"130px"}} addToCart={this.addToCart}/> 
                                             </div>)
                                  })
                                }
                           
                              </Slider>
                              </div>
                              <div style={{textAlign:"center",fontSize:"25px"}}>𝓟𝓲𝓬𝓴-𝓪-𝓑𝓸𝓸𝓴</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(BooksList)