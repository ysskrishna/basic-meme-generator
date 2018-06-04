import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";

class MyMemes extends Component {
  render() {
    //console.log("MyMemes",this.props);
    return (
      <div>
        {
          this.props.myMemes.map((meme,index) => {
            return (
              <img key={index} src = {meme.data.url} alt = "myMemes" className = "myMemeImg" />
            )
          })
        }
      </div>
    );
  }
}
function mapStateToProps(state){
  return {myMemes:state.createdMemes};
}

export default connect(mapStateToProps,null)(MyMemes);
