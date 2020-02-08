import React from 'react';
import {addPostActionCreator, likeCounter, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.posts,
        newPostText:state.ProfilePage.newPostText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateLike: (id) => {
            dispatch(likeCounter(id));
        }

    }
};
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;