import React from 'react';
import classes from './Post.module.css';
const Post =(props)=>{
    return (
  <div className={classes.item}>
    <img alt='12' src='https://images.genius.com/859261be9ed37f8168e056a27cebfacf.1000x563x1.jpg'></img>
    {props.message}
    <div>
    <span>like</span>
    </div>
    </div>
    );
}
export default Post;