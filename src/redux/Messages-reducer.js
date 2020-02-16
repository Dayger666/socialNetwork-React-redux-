import profileReducer from "./Profile-reducer";
const ADD_NEW_MSG = 'ADD-NEW-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE_NEW_MSG_TEXT';

let initialState={
    dialogs:[
        {id:1,name:'Dimych12'},
        {id:2,name:'Dimych2'},
        {id:3,name:'Dimych3'},
        {id:4,name:'Dimych4'},
        {id:5,name:'Dimych5'},
    ],
    messages:[
        {id:1,message:'Dwe31231212'},
        {id:2,message:'Didsamych2'},
        {id:3,message:'Diafsafsamych3'},
        {id:4,message:'Dafsasfimych4'},
        {id:5,message:'Dasfafsimych5'},
    ],
};
const messagesReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NEW_MSG:
            return {
                ...state,
                messages:[ ...state.messages,{id:state.messages[state.messages.length-1].id+1,message:action.newMsg}]
            };
        default:
            return state;
    }
};
export let addNewMsg=(value)=>{
    return {
        type:ADD_NEW_MSG,
        newMsg:value,
    }
};
export default messagesReducer;