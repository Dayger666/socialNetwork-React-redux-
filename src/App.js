import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile.jsx';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App =(props)=>{
  return (
   
    <div className='app-wrapper'>
<Header/>
<Navbar/>
<div className="app-wrapper-content">
<Route path='/profile' render={()=><Profile 
posts={props.appState.ProfilePage.posts}
 newPostText={props.appState.ProfilePage.newPostText} 
 dispatch={props.dispatch}/>}/>
<Route path='/dialogs' render={()=><DialogsContainer
    dialogs={props.appState.DialogsPage.dialogs}
    messages ={props.appState.DialogsPage.messages} newMsgText={props.appState.DialogsPage.newMessageText} dispatch={props.dispatch}/>}/>
<Route path='/news' render={()=><News/>}/>
<Route path='/music' render={()=><Music/>}/>
<Route path='/settings' render={()=><Settings/>}/>
</div>
    </div>
  );
}

export default App;

