import React from 'react';
 import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addNewMsg, updateNewMsgText} from "../../redux/Messages-reducer";



const Dialogs =(props)=>{
    
    let dialogsElements=props.dialogs
    .map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements=props.messages
    .map((message)=><Message message={message.message}/>);

let sendMessage=()=>{
    props.dispatch(addNewMsg());
};
let msgChange=(e)=>{
        let text =e.target.value;
        props.dispatch(updateNewMsgText(text));
    };

    return (
<div className={classes.dialogs}>
    <div className={classes.dialogsItems}>
        {dialogsElements}
    </div>
    <div>
    <div className={classes.messages}>
        <div>
        {messagesElements}
        <div>
            <div> <textarea placeholder='Enter your message' onChange={msgChange}  value={props.newMsgText}/></div>
            <div><button onClick={sendMessage}>Send</button></div>
        </div>
        </div>
        </div>
    </div>
</div> 
    );
};
export default Dialogs;