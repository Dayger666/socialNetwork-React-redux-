import React from "react";
import {Field, reduxForm} from "redux-form";

let LoginForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='Email' name={'email'} component={'input'}/>
        </div>
        <div>
            <Field placeholder='Password' name={'password'} component={'input'} type={'password'}/>
        </div>
        <div>
            <Field type='checkbox' name={'rememberMe'} component={'input'}/>Remember me
        </div>
        <div>
            <button>
                Send
            </button>
        </div>
    </form>)
};

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);
export default LoginReduxForm;