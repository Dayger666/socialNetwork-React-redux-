import React, {useState} from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import menuIcon from "../../assets/images/white-stripes-illustration-png-clip-art-thumbnail.png";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.navbarToggle} onClick={props.navbarToggle}>
                <img alt='123'
                     src="https://lh3.googleusercontent.com/proxy/L87WtRk6G0yu4mwX3zTIsAKqRpvy6PIPTO9abPtqP1ERJf7D7Ma5Kb-Re3gxuNq3gy0lsiJGPzhPbuZEw8tp03REGbZ5m68O0pneoyV0_XrizIwHsfW7ztol-mA"/>
            </div>
            {/*<div className={classes.depo}>*/}
            {/*    <img src='https://www.instagram.com/p/BtvLxWtDvp_/media/?size=l' alt='qew'/>*/}
            {/*</div>*/}
            <span className={classes.loginBlock}>
        {props.isAuth ? <span><span className={classes.login}>{props.login}</span><button onClick={() => {
                props.logOutThunkCreator()
            }} className={classes.loginBtn} type='button'>Log out</button></span> :
            <NavLink to={'/login'}>
                <button className={classes.loginBtn} type='button'>Log in</button>
            </NavLink>}

    </span>
        </header>
    );
};
export default Header;