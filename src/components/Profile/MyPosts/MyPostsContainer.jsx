import React from 'react';
import {addPostActionCreator, likeCounter, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.posts,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

        addPost: (value) => {
            dispatch(addPostActionCreator(value));
        },
        updateLike: (id) => {
            dispatch(likeCounter(id));
        }

    }
};
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;