import {RECEIVE_MEMES,CREATE_NEW_MEME} from "../constants";
import {username,password} from "./secrets";

function receiveMemes(json){
  const {memes} =json.data;
  return {
    type:RECEIVE_MEMES,
    memes
  }
}

function fetchMemesJson(){
  return fetch("https://api.imgflip.com/get_memes")
  .then(res => res.json())
  
}

export function fetchMemes(){
  return function(dispatch){
    return fetchMemesJson().then(json => dispatch(receiveMemes(json)))
  }
}

function createNewMeme(meme){
  return {
    type :CREATE_NEW_MEME,
    meme
  }
}

function postMemeJson(params){
  params["username"] = username;
  params["password"] = password;
  
  const bodyParams = Object.keys(params).map(key => {
    return encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
  }).join("&");
  //console.log("bodyParams",bodyParams);
  return fetch("https://api.imgflip.com/caption_image",{
    method:"POST",
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
    },
    body:bodyParams
  }).then(res =>res.json());
}

export function createMeme(newMemeObject){
  return function(dispatch){
    return postMemeJson(newMemeObject)
    .then(newMeme => dispatch(createNewMeme(newMeme)))
  }
}