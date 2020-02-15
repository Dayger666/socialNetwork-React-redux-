import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile =(props)=>{
    return (
<div>
  <ProfileInfo profile={props.profile} isAuth={props.isAuth} status={props.status} updateStatus={props.updateStatus}/>
  <MyPostsContainer/>
  </div>
    );
};
export default Profile;