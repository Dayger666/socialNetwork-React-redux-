import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import messagesReducer from "./Messages-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware  from "redux-thunk";


//my state
let reducers=combineReducers({
    ProfilePage:profileReducer,
    DialogsPage:messagesReducer,
    UsersPage:usersReducer,
    auth:authReducer,
});
let store=createStore(reducers,applyMiddleware(thunkMiddleware));



export default store;