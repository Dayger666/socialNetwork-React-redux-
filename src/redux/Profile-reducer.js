import {profileAPI, userAPI} from "../api/api";
import {setIsFollowing, unFollow} from "./Users-reducer";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const LIKE_COUNTER = 'LIKE-COUNTER';
const SET_USER_PROFILE='SET-USER-PROFILE';
const SET_USER_STATUS='SET-USER-STATUS';

let initialState={
    posts:[
        {id:3,message:'Hi,it is my first project',like:0,date:'1 Jan 2011, 00:00:00'},
        {id:2,message:'AYE',like:0,date:'1 Jan 2011, 00:00:00'},
        {id:1,message:'QQQQQQQQQQQQQQQq',like:0,date:'1 Jan 2011, 00:00:00'},
    ],
    profile:null,
    status:"",

};

const profileReducer=(state=initialState,action)=>{
    //make code refactoring
    //delete variable stateCopy in reducers and return {body}
    let stateCopy;
    switch(action.type) {
        case ADD_POST:
                let newPost = {
                    id: state.posts[0].id+1,
                    message: action.newPostText,
                    like: 0,
                    date:new Date().toLocaleString(),
                };
            return {
                ...state,
                posts:[newPost,...state.posts,],
            };
        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText:action.newText,
            };
        case LIKE_COUNTER:
            stateCopy={...state};
            stateCopy.posts=[...state.posts];
            stateCopy.posts.forEach((values, item, arr) => {
                if (values.id === action.likeId) {
                    values.like++;
                }
            });
            return stateCopy;
        case SET_USER_PROFILE:
            return {
                ...state,
                profile:action.profile,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status:action.status,
            };
        default:
            return state;
    }
};
export let addPostActionCreator=(value)=>({type: ADD_POST,newPostText:value});
export let likeCounter=(id)=>{
    return {
        type:LIKE_COUNTER,
        likeId:id,
    }
};
export let setUserProfile=(profile)=>{
    return {
        type:SET_USER_PROFILE,
        profile,
    }
};
export let setUserStatus=(status)=>{
    return {
        type:SET_USER_STATUS,
        status,
    }
};
export let setUserProfileThunkCreator=(userId)=>{
    return (dispatch)=>{
        profileAPI.getUserProfile(userId).then((res)=>{
            dispatch(setUserProfile(res.data));
        })
    }
};
export let setUserStatusThunkCreator=(userId)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userId).then((res)=>{
            dispatch(setUserStatus(res.data));
        })
    }
};
export let updateUserStatusThunkCreator=(status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status).then((res)=>{
            if(res.data.resultCode===0) {
                dispatch(setUserStatus(status));
            }
            })
    }
};
export default profileReducer;