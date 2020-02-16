import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserListContainer from "./components/Users/UserListContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Friends from "./components/Friends/Friends";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/App-reducer";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
          return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UserListContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
                <Friends/>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        initialized:state.appLoad.initialized,
    }
};
 export default compose(withRouter,connect(mapStateToProps,{initializeApp
 }))(App);

