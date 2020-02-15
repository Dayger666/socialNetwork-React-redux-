import React from 'react';
 import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addNewMsg, updateNewMsgText} from "../../redux/Messages-reducer";
import {Redirect} from "react-router-dom";



const Dialogs =(props)=>{
    if(props.isAuth===false){
        return <Redirect to='/login'/>;
    }
    let state=props.DialogsPage;
    let newMessage=React.createRef();
    let dialogsElements=state.dialogs
    .map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements=state.messages
    .map((message)=><Message message={message.message}/>);

let sendMessage=()=>{
    newMessage.current.value='';
    props.sendMessage();
};
let msgChange=(e)=>{
        let text =e.target.value;
        props.msgChange(text);
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
            <div> <textarea ref={newMessage} placeholder='Enter your message' onChange={msgChange}  value={state.newMessageText}/></div>
            <div><button onClick={sendMessage}>Send</button></div>
        </div>
        </div>
        </div>
    </div>
</div> 
    );
};
export default Dialogs;