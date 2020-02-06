import React from 'react';
 import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addNewMsg, addPostActionCreator, updateNewMsgText, updateNewPostTextActionCreator} from "../../redux/state";


const Dialogs =(props)=>{
    
    let dialogsElements=props.dialogs
    .map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements=props.messages
    .map((message)=><Message message={message.message}/>);
    let sendMsg=React.createRef();
let sendMessage=()=>{
    props.dispatch(addNewMsg());
};
let msgChange=()=>{
        let text =sendMsg.current.value;
        props.dispatch(updateNewMsgText(text));
    };

    return (
<div className={classes.dialogs}>
    <div className={classes.dialogsItems}>
        {dialogsElements}
    </div>
    <div>
    <div className={classes.messages}>
        {messagesElements}
    </div>
    <div>
    <textarea onChange={msgChange} ref={sendMsg} value={props.newMsgText}/>
    </div>
    <div>
    <button onClick={sendMessage}>Send</button>
    </div>
    </div>
</div> 
    );
};
export default Dialogs;