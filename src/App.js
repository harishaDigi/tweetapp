import React from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom"
import {store,history} from './Redux/store'
import { Provider } from 'react-redux'
import MainApp from './Components/MainApp'
import './index.css'
import RefTest from './Components/RefTest'

function App() {
  console.log("History", history);
  console.log("Store",store);  
  
  return (
    <Provider store={store}>
             <div className="main-container">
              <Router history={history} >
                  <Route  path = "/"  component = {MainApp}></Route>
              </Router>
             </div>
    </Provider>
  );
}

export default App;
