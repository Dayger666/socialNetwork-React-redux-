import React, {useEffect, useState} from "react";
import classes from './ProfileInfo.module.css';

export let ProfileStatusWithHooks =(props)=>{

    let [editMode,setEditMode]=useState(false);
    let [status,setStatus]=useState(props.status);
    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);

    let onStatusChange=(e)=>{
            setStatus(e.currentTarget.value)
    };
        return (
            <div>
                {
                    editMode ?
                        <div>
                            <input className={classes.statusInput} onChange={onStatusChange}
                                    autoFocus={true} onBlur={() => {
                                setEditMode(false);
                                props.updateStatus(status);
                            }} value={status}/>
                        </div> :
                        <div className={classes.status} onDoubleClick={() => {
                            setEditMode(true);
                        }}>
                    <span>{status}
            </span>
                        </div>
                }
            </div>
        )

};