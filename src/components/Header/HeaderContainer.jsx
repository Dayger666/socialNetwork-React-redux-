import * as React from "react";
import Header from "./Header";
import * as axios from "axios";
import {setUserData} from "../../redux/Auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then((res) => {
            if(res.data.resultCode===0){
                this.props.setUserData(res.data.data.id,res.data.data.email,res.data.data.login);
            }
        })
    }

    render() {
    return <Header {...this.props}/>
}


}
let mapStateToProps=(state)=>{
return {
    isAuth:state.auth.isAuth,
    login:state.auth.login,
};
};
export default connect(mapStateToProps,{setUserData})(HeaderContainer);