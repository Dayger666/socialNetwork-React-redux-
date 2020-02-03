import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile =(props)=>{
    return (
<div>
  <ProfileInfo/>
  <MyPosts posts={props.posts} addPost={props.addPost}/>
  </div>
    );
}
export default Profile;