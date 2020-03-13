import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile =(props)=>{
    return (
<div className={classes.content}>
    <div className={classes.profile}>
  <ProfileInfo profile={props.profile} isAuth={props.isAuth} status={props.status} updateStatus={props.updateStatus}/>
    </div>
    <div className={classes.posts}>
  <MyPostsContainer/>
    </div>
    </div>
    );
};
export default Profile;