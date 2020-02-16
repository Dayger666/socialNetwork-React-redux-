import React from 'react';
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


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if(!userId){
                this.props.history.push('/login');
            }
        }

        this.props.setUserProfileThunkCreator(userId);
        this.props.setUserStatusThunkCreator(userId);
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatusThunkCreator}/>
    }

}

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
}), withRouter, withAuthRedirect)(ProfileContainer)
// connect(mapStateToProps, {setUserProfile})(withUrlDataProfileContainer);