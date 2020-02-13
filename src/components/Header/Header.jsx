import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header =(props)=>{
    return (
<header className={classes.header}>
  <img src='https://www.instagram.com/p/BtvLxWtDvp_/media/?size=l' alt='qew'></img>
    <span className={classes.loginBlock}>
        {props.isAuth?props.login:
        <NavLink to={'/login'}>Login</NavLink>}

    </span>
</header>
    );
};
export default Header;