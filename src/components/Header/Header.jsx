import React from 'react';
import classes from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Header =(props)=>{
    return (
<header className={classes.header}>
  <img src='https://www.instagram.com/p/BtvLxWtDvp_/media/?size=l' alt='qew'/>
    <span className={classes.loginBlock}>
        {props.isAuth? <span><span className={classes.login}>{props.login}</span><button onClick={()=>{ props.logOutThunkCreator()}} className={classes.loginBtn} type='button'>Log out</button></span>:
        <NavLink to={'/login'}><button className={classes.loginBtn} type='button'>Log in</button></NavLink>}

    </span>
</header>
    );
};
export default Header;