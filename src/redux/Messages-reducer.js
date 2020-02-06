import profileReducer from "./Profile-reducer";
const ADD_NEW_MSG = 'ADD-NEW-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE_NEW_MSG_TEXT';

const messagesReducer=(state,action)=>{
    switch(action.type){
        case ADD_NEW_MSG:
            let newMsg={
                id:11,
                message:state.newMessageText,
            };
            state.messages.push(newMsg);
            state.newMessageText='';
            return state;
        case UPDATE_NEW_MSG_TEXT:
            state.newMessageText=action.newText;
            return state;
        default:
            return state;
    }
};
export let addNewMsg=()=>{
    return {
        type:ADD_NEW_MSG,
    }
};
export let updateNewMsgText=(text)=>{
    return {
        type: UPDATE_NEW_MSG_TEXT,
        newText:text,
    }
};
export default messagesReducer;