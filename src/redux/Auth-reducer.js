import {setIsFollowing, unFollow} from "./Users-reducer";
import {authAPI, userAPI} from "../api/api";

const SET_USER_DATA='SET-USER-DATA';

let initialState={
    userId:null,
    email:null,
    login:null,
    isAuth:false,
};
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true,
            };
        default:
            return state;
    }

};
export let setUserData=(userId,email,login)=>{
    return {
        type:SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        }
    }
};

export let setUserDataThunkCreator=()=>{
    return (dispatch)=>{
        authAPI.authMe().then((res)=>{
            if(res.resultCode===0) {
                dispatch(setUserData(res.data.id,res.data.email,res.data.login));
            }
        })
    }
};

export default authReducer;
