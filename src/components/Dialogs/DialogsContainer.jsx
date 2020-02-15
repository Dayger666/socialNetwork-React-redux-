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
        msgChange:(text)=>{
           dispatch(updateNewMsgText(text));
        },
        sendMessage:()=>{
           dispatch(addNewMsg());
        }
    }

};

let DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;