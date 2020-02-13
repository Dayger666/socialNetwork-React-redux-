import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/Profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId=this.props.match.params.userId;
        if(!userId){
            userId=3;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((res) => {
            console.log(res.data);
            this.props.setUserProfile(res.data);
        })
    }
   render(){
       return <Profile {...this.props} profile={this.props.profile}/>
   }

}

let mapStateToProps=(state)=>{
    return{
  profile:state.ProfilePage.profile,
    }
};

let withUrlDataProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile})(withUrlDataProfileContainer);