import React from 'react';
 import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs =(props)=>{
    
    let dialogsElements=props.dialogs
    .map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);

    let messegesElements=props.messages
    .map((message)=><Message message={message.message}/>)
    let sendMsg=React.createRef();
let sendMessage=()=>{
    let text=sendMsg.current.value;
    alert(text);
}
    return (
<div className={classes.dialogs}>
    <div className={classes.dialogsItems}>
        {dialogsElements}
    </div>
    <div>
    <div className={classes.messages}>
        {messegesElements}
    </div>
    <div>
    <textarea ref={sendMsg}></textarea>
    </div>
    <div>
    <button onClick={sendMessage}>Send</button>
    </div>
    </div>
</div> 
    );
}
export default Dialogs;