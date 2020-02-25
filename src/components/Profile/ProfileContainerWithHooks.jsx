import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setUserProfile,
    setUserProfileThunkCreator,
    setUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let ProfileContainerWithHooks =(props)=>{

    useEffect(()=>{
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.userId;
            if(!userId){
                props.history.push('/login');
            }
        }
        props.setUserProfileThunkCreator(userId);
        props.setUserStatusThunkCreator(userId);
    },[]);


        return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateUserStatusThunkCreator}/>

};

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status:state.ProfilePage.status,
        userId:state.auth.userId,
        isAuth:state.auth.isAuth,
    }
};
// let authRedirectComponent=withAuthRedirect(ProfileContainer);
//
//
//
// let withUrlDataProfileContainer = withRouter(authRedirectComponent);
export default compose(connect(mapStateToProps, {
    setUserProfile,
    setUserProfileThunkCreator,
    setUserStatusThunkCreator,
    updateUserStatusThunkCreator,
}), withRouter, withAuthRedirect)(ProfileContainerWithHooks)
// connect(mapStateToProps, {setUserProfile})(withUrlDataProfileContainer);