import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state.js';


export let renderEtireTree=(state)=>{
ReactDOM.render(<App appState={state} addPost={addPost}/>, document.getElementById('root'));
}


