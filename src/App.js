import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserListContainer from "./components/Users/UserListContainer";
import Friends from "./components/Friends/Friends";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {initializeApp} from "./redux/App-reducer";
import ProfileContainerWithHooks from "./components/Profile/ProfileContainerWithHooks";


class App extends React.Component {
    state = {
        navbarIsHidden: true,
    };
    onNavbarChange=()=>{
        this.setState({
            navbarIsHidden:!this.state.navbarIsHidden,
        },()=>{})
    };
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
          return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer navbarToggle={this.onNavbarChange}/>

                {!this.state.navbarIsHidden&&<Navbar/>}
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?' render={() => <ProfileContainerWithHooks/>}/>
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

