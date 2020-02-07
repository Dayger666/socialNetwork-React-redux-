import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";



const MyPosts =(props)=>{
let newPost=React.createRef();
let onAddPost=()=>{
  props.addPost();
  newPost.current.value='';

};
const postsElements=props.posts.map((post)=><Post message={post.message} like={post.like} updateLike={props.updateLike} id={post.id} date={post.date} />);
let postChange=()=>{
let text =newPost.current.value;
props.updateNewPostText(text);
};

    return (
<div className={classes.postsBlock}>
  MyPosts
  <div>new post
    <div>
  <textarea onChange={postChange} ref={newPost} value={props.newPostText}/>
  </div>
  <div>
  <button onClick={onAddPost}>add post</button>
  </div>
  </div>
  <div className={classes.posts}>
    {postsElements}
  </div>
  </div>
    );
};
export default  MyPosts;