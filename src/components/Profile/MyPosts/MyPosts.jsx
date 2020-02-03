import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts =(props)=>{

let newPost=React.createRef();
let addPost=()=>{
  console.log(props.addPost);
  let text=newPost.current.value;
 props.addPost(text);
 newPost.current.value="";
}
const postsElements=props.posts.map((post)=><Post message={post.message}/>) 

    return (
<div className={classes.postsBlock}>
  MyPosts
  <div>new post
    <div>
  <textarea ref={newPost}></textarea>
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
}
export default  MyPosts;