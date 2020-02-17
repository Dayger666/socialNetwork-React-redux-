import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/l4E3YeajlLc.txt.jpg";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


const ProfileInfo =(props)=>{
  if(!props.profile){
    return <Preloader/>
  }
  else {

    return (
        <div className={classes.content}>
          <div className={classes.mainImg}>
            {/*<img className={classes.backImg} alt='123'*/}
            {/*     src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/02/boulevard.png?fit=1686%2C831&ssl=1"/>*/}
                  {props.profile.photos.large?<img alt='sdsd' src={props.profile.photos.large}/>:<img alt='asda'src={userPhoto}/>}
                  <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
          </div>

        </div>
    );
  }
}
export default ProfileInfo;