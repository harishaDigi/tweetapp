import React from 'react'
import BooksList from './BooksList'
import Book from './Book'
import Navbar from './Navbar'
import Cart from './Cart'
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom"

function MainApp(props) {
          console.log("props---MainApp", props);
          
          
          return (
                    <Router >
                              <Navbar {...props} />
                              <Route path = "/cart" component = {Cart}></Route>
                    <Route exact path = "/"  component = {BooksList}></Route>
                    <Route path = "/book" component ={Book} ></Route>
                 
                </Router>
          )
}
export default MainApp