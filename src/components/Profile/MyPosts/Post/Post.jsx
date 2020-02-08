import React from 'react';
import classes from './Post.module.css';

const Post =(props)=>{
    const counter=()=>{
       props.updateLike(props.id);
    };
    return (
  <div className={classes.item}>
    <img alt='12' src='https://images.genius.com/859261be9ed37f8168e056a27cebfacf.1000x563x1.jpg'/>
    {props.message}
    <div>
    <span onClick={counter}>like</span>
        <span>{props.like}</span>
        <span className={classes.date}>{props.date}</span>
    </div>
    </div>
    );
};
export default Post;