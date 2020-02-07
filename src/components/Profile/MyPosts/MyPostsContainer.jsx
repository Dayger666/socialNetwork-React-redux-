import React from 'react';
import {addPostActionCreator, likeCounter, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer =(props)=>{
let addPost=()=>{
 props.dispatch(addPostActionCreator());
};
let updateNewPostText=(text)=>{
    let action =updateNewPostTextActionCreator(text);
props.dispatch(action);
};
let updateLike=(id)=>{
  props.dispatch(likeCounter(id));
}

    return (<MyPosts updateNewPostText={updateNewPostText} addPost={addPost} posts={props.posts} updateLike={updateLike}/>
    );
};
export default  MyPostsContainer;