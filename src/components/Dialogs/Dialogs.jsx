import React from 'react';
 import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs =()=>{
    let dialogsData=[
        {id:1,name:'Dimych12'},
        {id:2,name:'Dimych2'},
        {id:3,name:'Dimych3'},
        {id:4,name:'Dimych4'},
        {id:5,name:'Dimych5'},
    ]; 
    let messagesData=[
        {id:1,message:'Dwe31231212'},
        {id:2,message:'Didsamych2'},
        {id:3,message:'Diafsafsamych3'},
        {id:4,message:'Dafsasfimych4'},
        {id:5,message:'Dasfafsimych5'},
    ];
    let dialogsElements=dialogsData
    .map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>);

    let messegesElements=messagesData
    .map((message)=><Message message={message.message}/>)
    
    return (
<div className={classes.dialogs}>
    <div className={classes.dialogsItems}>
        {dialogsElements}
    </div>
    <div className={classes.messages}>
        {messegesElements}
    </div>
</div> 
    );
}
export default Dialogs;