import React from 'react'
import tweets from './tweets.js'
class TweetResult extends React.Component{
          constructor(props){
                    super(props)
                    this.state={
                                       data :"",
                                        filter_data:[]    
                              }
                   }
          componentWillReceiveProps(){
                    console.log("entered in componentwillreceiveprops---->",this.props.name);
                    this.setState({filter_data : tweets.filter((tweet)=>{
                    return    tweet.user.name===this.props.name
                    })
                  })  
          }
          componentWillMount(){
                    console.log("entered in componentwillmount---->",this.props.name);

                    this.setState({
                     data: tweets,
                     filter_data :  tweets.filter((tweet)=>{
                    
                               
                     return    tweet.user.name===this.props.name
                    })
                  })
          }        

      
          render(){                    
          console.log("Filtered Data======",this.state.filter_data)
                    return(
                              <div className="tweet-result">
                              {this.state.filter_data.length>0?
                                      
                                                  this.state.filter_data.map((tweet) => {
                                                            let imageUrl  = tweet.user.profile_background_image_url_https
                                                            console.log("Image url====",imageUrl)
                                                  return <div className="tweet_box" style={{backgroundImage:`url(${imageUrl})`}}>
                                             
                                                       <div >
                                                                 <img src={tweet.user.profile_image_url}/>
                                                       </div>
                                                       <div className="tweet_message">
                                                            <p>{tweet.text}</p>
                                                       </div>
                                             
                                                   </div>
                                           })   
                             :"" }
                              </div>
                    )
          }
}
export default TweetResult;