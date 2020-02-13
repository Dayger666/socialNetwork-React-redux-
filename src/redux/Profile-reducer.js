const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const LIKE_COUNTER = 'LIKE-COUNTER';
const SET_USER_PROFILE='SET-USER-PROFILE';

let initialState={
    posts:[
        {id:3,message:'Hi,it is my first project',like:0,date:'1 Jan 2011, 00:00:00'},
        {id:2,message:'AYE',like:0,date:'1 Jan 2011, 00:00:00'},
        {id:1,message:'QQQQQQQQQQQQQQQq',like:0,date:'1 Jan 2011, 00:00:00'},
    ],
    newPostText:'',
    profile:null,

};

const profileReducer=(state=initialState,action)=>{
    //make code refactoring
    //delete variable stateCopy in reducers and return {body}
    let stateCopy;
    switch(action.type) {
        case ADD_POST:
                let newPost = {
                    id: state.posts[0].id+1,
                    message: state.newPostText,
                    like: 0,
                    date:new Date().toLocaleString(),
                };
            return {
                ...state,
                posts:[newPost,...state.posts,],
                newPostText:''
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
        default:
            return state;
    }
};
export let addPostActionCreator=()=>({type: ADD_POST,});
export let updateNewPostTextActionCreator=(text)=>{
    return {
        type: CHANGE_NEW_POST_TEXT,
        newText:text,
    }
};
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
export default profileReducer;