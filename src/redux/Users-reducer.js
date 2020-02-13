import {userAPI} from "../api/api";
import * as axios from "axios";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS='SET-USERS'
const SET_CURRENT_PAGE="SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT='SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING='TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING='TOGGLE-IS-FOLLOWING';

let initialState={
    users:[
    ],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
    isFollowing:[],
};
const usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id ) {
                        return {
                            ...u,
                            followed: true,
                        }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id ) {
                        return {
                            ...u,
                            followed: false,
                        }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return{
                ...state,
                users:action.users,
            };
        case SET_CURRENT_PAGE:
            return{
                ...state,
               currentPage:action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount:action.totalUsersCount,
            };
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching:action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING:
            return{
                ...state,
                isFollowing: action.isFollowing?[...state.isFollowing,action.userId]:
                    state.isFollowing.filter(id=>id!==action.userId)

            };
        default:
            return state;
    }

};
export let follow=(id)=>{
    return {
        type:FOLLOW,
        id:id,
    }
};
export let unFollow=(id)=>{
    return {
        type:UNFOLLOW,
        id:id
    }
};
export let setUsers=(users)=>{
    return {
        type:'SET-USERS',
        users:users,
    }
};
export let setCurrentPage=(page)=>{
    return {
        type:SET_CURRENT_PAGE,
        currentPage:page,
    }
};
export let setTotalUsersCount=(count)=>{
    return {
        type:SET_TOTAL_USERS_COUNT,
        totalUsersCount:count,
    }
};
export let setIsFetching=(value)=>{
    return {
        type:TOGGLE_IS_FETCHING,
        isFetching:value,
    }
};
export let setIsFollowing=(value,userId)=>{
    return {
        type:TOGGLE_IS_FOLLOWING,
        isFollowing:value,
        userId:userId,
    }
};
export let getUsersThunkCreator=(pageSize,pageNumber)=>{
    return (dispatch)=>{
        dispatch(setCurrentPage(pageNumber));
        dispatch(setIsFetching(true));
        userAPI.getUsers(pageSize,pageNumber).then((res) => {
            dispatch(setUsers(res.items));
            dispatch(setIsFetching(false));
            dispatch(setTotalUsersCount(res.totalCount>100?100:res.totalCount));
        })
    }

};
export let setFollowThunkCreator=(userId)=>{
    return (dispatch)=>{
        dispatch(setIsFollowing(true,userId));
        userAPI.follow(userId).then((res)=>{
            if(res.resultCode===0) {
                dispatch(follow(userId));
            }
            dispatch(setIsFollowing(false,userId));
        })
    }
};
export let setUnFollowThunkCreator=(userId)=>{
    return (dispatch)=>{
        dispatch(setIsFollowing(true,userId));
        userAPI.unFollow(userId).then((res)=>{
            if(res.resultCode===0) {
                dispatch(unFollow(userId));
            }
            dispatch(setIsFollowing(false,userId));
        })
    }
};

export default usersReducer;