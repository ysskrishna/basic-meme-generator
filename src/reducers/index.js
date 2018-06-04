import {combineReducers} from "redux";
import {RECEIVE_MEMES,CREATE_NEW_MEME} from "../constants";

function memes(state =[],action){
  switch(action.type){
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}

function createdMemes(state =[],action){
  switch(action.type){
    case CREATE_NEW_MEME:
      state = [...state,action.meme]
      return state;
    default:
      return state;
  }
}


const rootReducer = combineReducers({memes,createdMemes});
export default rootReducer;