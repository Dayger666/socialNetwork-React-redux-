const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const LIKE_COUNTER = 'LIKE-COUNTER';


let initialState={
    posts:[
        {id:1,message:'Hi,it is my first project',like:0,date:'1 Jan 2011, 00:00:00'},
        {id:2,message:'AYE',like:0,date:'1 Jan 2011, 00:00:00'},
        {id:3,message:'QQQQQQQQQQQQQQQq',like:0,date:'1 Jan 2011, 00:00:00'},
    ],
    newPostText:'',
};

const profileReducer=(state=initialState,action)=>{
    let stateCopy={...state};
    switch(action.type) {
        case ADD_POST:
                let newPost = {
                    id: state.posts[state.posts.length-1].id+1,
                    message: state.newPostText,
                    like: 0,
                    date:new Date().toLocaleString(),
                };
                stateCopy.posts=[...state.posts];
                stateCopy.posts.unshift(newPost);
                stateCopy.newPostText = '';
            return stateCopy;
        case CHANGE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        case LIKE_COUNTER:

            state.posts.forEach((values, item, arr) => {
                if (values.id === action.likeId) {
                    values.like++;
                }
            });
            return state;
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
export default profileReducer;