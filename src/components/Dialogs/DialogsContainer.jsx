import React from 'react';
 import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addNewMsg, updateNewMsgText} from "../../redux/Messages-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer =(props)=>{

let sendMessage=()=>{
    props.dispatch(addNewMsg());
};
let msgChange=(text)=>{
        props.dispatch(updateNewMsgText(text));
    };

    return (
        <Dialogs msgChange={msgChange} sendMessage={sendMessage} dialogs={props.dialogs} messages={props.messages}/>
    );
};
export default DialogsContainer;