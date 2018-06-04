import React, { Component } from 'react';
import './App.css';
import {createMeme} from "../actions";
import {connect} from "react-redux";

class MemeItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      hovered:false
    }
    this.postMeme = this.postMeme.bind(this);
  }
  
  postMeme(){
    //console.log("this.props",this.props);
    const memeObj = {
      template_id:this.props.meme.id,
      text0: this.props.text0,
      text1: this.props.text1
    }
    this.props.createMeme(memeObj);
  }
  render() {
    return (
      <div className = "memeItem" 
        onMouseEnter = {() => {this.setState({hovered:true})}}
        onMouseLeave = {() => {this.setState({hovered:false})}}
        onClick={() => this.postMeme()}
      >
        <img
          src={this.props.meme.url}
          alt = {this.props.meme.name}
          className = {this.state.hovered ?"memeImg darkenImg" :"memeImg"}
        />
        <p className ={this.state.hovered ? "memeText" :"noText"}>{this.props.meme.name}</p>
      </div>
    );
  }
}

export default connect(null,{createMeme})(MemeItem);
