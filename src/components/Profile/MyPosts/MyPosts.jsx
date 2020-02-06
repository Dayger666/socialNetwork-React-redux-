import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";



const MyPosts =(props)=>{
let newPost=React.createRef();
let addPost=()=>{

 props.dispatch(addPostActionCreator());
};
const postsElements=props.posts.map((post)=><Post message={post.message} like={post.like} dispatch={props.dispatch} id={post.id} />);
let postChange=()=>{
let text =newPost.current.value; 
props.dispatch(updateNewPostTextActionCreator(text));
};

    return (
<div className={classes.postsBlock}>
  MyPosts
  <div>new post
    <div>
  <textarea onChange={postChange} ref={newPost} value={props.newPostText}/>
  </div>
  <div>
  <button onClick={addPost}>add post</button>
  </div>
  </div>
  <div className={classes.posts}>
    {postsElements}
  </div>
  </div>
    );
};
export default  MyPosts;