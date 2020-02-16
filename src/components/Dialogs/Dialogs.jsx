import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs =(props)=>{
    if(props.isAuth===false){
        return <Redirect to='/login'/>;
    }
    let state=props.DialogsPage;
    let dialogsElements=state.dialogs
    .map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements=state.messages
    .map((message)=><Message message={message.message}/>);

let addNewMessage=(value)=>{
    props.sendMessage(value.newMessage);
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
        </div>
        <DialogsReduxForm onSubmit={addNewMessage}/>
        </div>
    </div>
</div> 
    );
};
let DialogsAddMessageForm=(props)=>{

    return (<form onSubmit={props.handleSubmit}>
        <div> <Field component={'textarea'} name={"newMessage"} placeholder='Enter your message' /></div>
        <div><button>Send</button></div>
    </form>);
};
let DialogsReduxForm = reduxForm({
    form: 'DialogsAddMessageForm',
})(DialogsAddMessageForm);
export default Dialogs;