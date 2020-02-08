import React from 'react';
 import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addNewMsg, updateNewMsgText} from "../../redux/Messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps=(state)=>{
    return{
        DialogsPage:state.DialogsPage
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