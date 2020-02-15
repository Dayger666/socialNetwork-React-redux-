import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header =(props)=>{
    return (
<header className={classes.header}>
  <img src='https://www.instagram.com/p/BtvLxWtDvp_/media/?size=l' alt='qew'/>
    <span className={classes.loginBlock}>
        {props.isAuth?<span>{props.login}</span>:
        <NavLink to={'/login'}><button className={classes.loginBtn} type='button'>Log in</button></NavLink>}

    </span>
</header>
    );
};
export default Header;