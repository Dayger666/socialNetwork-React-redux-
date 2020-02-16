import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import messagesReducer from "./Messages-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./Auth-reducer";
import thunkMiddleware  from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reducer";

//my state

let reducers=combineReducers({
    ProfilePage:profileReducer,
    DialogsPage:messagesReducer,
    UsersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    appLoad:appReducer,
});
let store=createStore(reducers,applyMiddleware(thunkMiddleware));



export default store;