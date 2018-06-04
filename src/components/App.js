import React, { Component } from 'react';
import './App.css';
import {connect } from "react-redux";
import MemeItem from "./memeItem";
import MyMemes from "./myMemes";
import {Form, FormGroup,ControlLabel,FormControl} from "react-bootstrap";

class App extends Component {
  constructor(props){
    super (props);
    this.state ={
      memeLimit :10,
      topText:"",
      bottomText:""
    };
  }
  render() {
    //console.log("this.props",this.props); 
    return (
      <div>
        <h1>Welcome to Meme Generator</h1>
        <MyMemes></MyMemes>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            <FormControl type ="text" onChange = {e => this.setState({topText:e.target.value})}></FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            <FormControl type ="text" onChange = {e => this.setState({bottomText:e.target.value})}></FormControl>
          </FormGroup>
        </Form>
        {
          this.props.memes.slice(0,this.state.memeLimit).map((meme,index)=>{
            return(
              <MemeItem key = {index} meme= {meme} text0 = {this.state.topText} text1 = {this.state.bottomText}></MemeItem>
            )
          })
        }
        <div className = "memeButton" onClick={() => {this.setState({memeLimit:this.state.memeLimit + 10 })}}>Load 10 more Memes....</div>
       </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps,null)(App);
