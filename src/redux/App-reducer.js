import {setUserDataThunkCreator} from "./Auth-reducer";


const SET_USER_CONFIRMED='SET-USER-CONFIRMED';
const SET_HEADER_HIDDEN='SET-HEADER-HIDDEN';

let initialState={
    initialized:false,
    headerHidden:false,
};
const appReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USER_CONFIRMED:
            return {
                ...state,
                initialized: true,
            };
        case SET_HEADER_HIDDEN:
            return {
              ...state,
              headerHidden:!initialState.headerHidden,
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
export let setHeaderHidden=()=>{
    return {
        type:SET_HEADER_HIDDEN,
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
