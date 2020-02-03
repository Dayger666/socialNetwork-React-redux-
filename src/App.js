import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter,Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import state, { addPost } from './redux/state';

const App =(props)=>{
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
<Header/>
<Navbar/>
<div className="app-wrapper-content">
<Route path='/profile' render={()=><Profile posts={props.appState.ProfilePage.posts} addPost={props.addPost}/>}/>
<Route path='/dialogs' render={()=><Dialogs dialogs={props.appState.DialogsPage.dialogs} messages={props.appState.DialogsPage.messages}/>}/>
<Route path='/news' render={()=><News/>}/>
<Route path='/music' render={()=><Music/>}/>
<Route path='/settings' render={()=><Settings/>}/>
</div>
    </div>
    </BrowserRouter>
  );
}

export default App;

