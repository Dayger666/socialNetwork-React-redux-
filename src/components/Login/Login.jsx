import React from 'react';
import LoginReduxForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";


let Login = (props) => {
const onSubmit=(formData)=>{
    props.loginThunkCreator(formData.email,formData.password,formData.rememberMe);
};
if(props.isAuth){
    return <Redirect to={'/profile'}/>
}
    return (
        <div><h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)

};
let mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth,
    }
};
let LoginContainer=connect(mapStateToProps,{loginThunkCreator})(Login);
export default LoginContainer;
