const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const LIKE_COUNTER = 'LIKE-COUNTER';

const profileReducer=(state,action)=>{
    switch(action.type) {
        case ADD_POST:
            if(state.newPostText!=='') {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    like: 0,
                };
                state.posts.push(newPost);
                state.newPostText = '';
            }
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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