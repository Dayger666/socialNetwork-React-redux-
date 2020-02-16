import {setUserDataThunkCreator} from "./Auth-reducer";


const SET_USER_CONFIRMED='SET-USER-CONFIRMED';

let initialState={
    initialized:false,
};
const appReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USER_CONFIRMED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }

};

export let setConfirmed=()=>{
    return {
        type:SET_USER_CONFIRMED,
    }
};

export let initializeApp=()=>{
    return (dispatch)=>{
    let promise = dispatch(setUserDataThunkCreator());
    Promise.all([promise]).then(()=>{
        dispatch(setConfirmed());
    });
    }
};

export default appReducer;
