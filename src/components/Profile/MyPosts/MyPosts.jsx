import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts =()=>{

const postsData=[
  {id:1,message:'Hi,it is my first project'},
  {id:2,message:'AYE'},
]
const postsElements=postsData.map((post)=><Post message={post.message}/>) 

    return (
<div className={classes.postsBlock}>
  MyPosts
  <div>new post
    <div>
  <textarea></textarea>
  </div>
  <div>
  <button>add post</button>
  </div>
  </div>
  <div className={classes.posts}>
    {postsElements}
  </div>
  </div>
    );
}
export default  MyPosts;