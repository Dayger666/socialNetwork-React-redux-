import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile =(props)=>{
    return (
<div>
  <ProfileInfo/>
  <MyPostsContainer posts={props.posts} newPostText={props.newPostText}
  dispatch={props.dispatch}/>
  </div>
    );
};
export default Profile;