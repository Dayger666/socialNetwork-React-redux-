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
            };
        case 'SET-IS-AUTH':
            return {
                ...state,
                isAuth:action.isAuth,
            };
        default:
            return state;
    }

};
export let setUserData=(userId,email,login,isAuth)=>{
    return {
        type:SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth,
        }
    }
};
export let setIsAuth=(isAuth)=>{
    return {
        type:'SET-IS-AUTH',
        isAuth,
    }
};
export let setUserDataThunkCreator=()=>{
    return (dispatch)=>{
        authAPI.authMe().then((res)=>{
            if(res.resultCode===0) {
                dispatch(setUserData(res.data.id,res.data.email,res.data.login,true));
            }
        })
    }
};
export let loginThunkCreator=(email,password,rememberMe)=>{
    return (dispatch)=>{
        authAPI.login(email,password,rememberMe).then((res)=>{
            if(res.data.resultCode===0) {
                dispatch(setUserDataThunkCreator());
            }
        })
    }
};
export let logOutThunkCreator=()=>{
    return (dispatch)=>{
        authAPI.logOut().then((res)=>{
            if(res.data.resultCode===0) {
                dispatch(setIsAuth(false));
            }
        })
    }
};

export default authReducer;
