import * as React from "react";
import Header from "./Header";
import {logOutThunkCreator, setUserData} from "../../redux/Auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component{
//make refactoring
    render() {
    return <Header {...this.props}/>
}
}
let mapStateToProps=(state)=>{
return {
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    profile:state.ProfilePage.profile,

}
};
export default connect(mapStateToProps,{setUserData,logOutThunkCreator})(HeaderContainer);