import React from 'react'
import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TweetResult from './TweetResult'
import './styles.css'
class TweetSearch extends React.Component{
          constructor(){
                    super()
                    this.state={
                              name:""
                    }
          }
          handleChange=(e)=>{
                    console.log("entered in handleCahnge====")
                    this.setState({
                              name  : e.target.value
                    })
          }
          handleSearch = (e)=>{
                    if(e.keyCode == 13){
                              console.log('value=======', e.target.value);
                              // put the login here
                              this.setState({
                                        name  : e.target.value
                              })
                           }
                    
                
          }
          render(){
                    return(
                              <div className="container">
                              <div className="main-container">
                              <MuiThemeProvider>
                                 {/* <SearchBar onChange={this.handleChange} 
                                 onRequestSearch={(e)=>this.handleSearch(e)}/> */}
                                 <input style={{width:798,borderRadius:25, height: 30}} type="text" value={this.state.name} onChange={this.handleChange} onKeyDown={this.handleSearch}/>
                             </MuiThemeProvider>
                            
                              </div>
                              <TweetResult name={this.state.name} />          

                              </div>
                    )
          }
}
export default TweetSearch;