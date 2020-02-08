import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import messagesReducer from "./Messages-reducer";


//my state
let reducers=combineReducers({
    ProfilePage:profileReducer,
    DialogsPage:messagesReducer,
});
let store=createStore(reducers);



export default store;