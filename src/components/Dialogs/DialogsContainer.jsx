import React from 'react';
import {addNewMsg, updateNewMsgText} from "../../redux/Messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        DialogsPage:state.DialogsPage,
        isAuth: state.auth.isAuth,
    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
        sendMessage:(value)=>{
           dispatch(addNewMsg(value));
        }
    }

};

let DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;