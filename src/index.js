import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";

import rootReducer  from "./reducers";
import {fetchMemes} from "./actions";
import thunk from "redux-thunk";

const store =  createStore(rootReducer,applyMiddleware(thunk));
store.dispatch(fetchMemes())
//console.log("store.getState() |",store.getState());
//store.subscribe(()=>console.log("store",store.getState()));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
