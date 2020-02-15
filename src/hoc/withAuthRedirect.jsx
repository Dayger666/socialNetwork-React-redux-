import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};
export const withAuthRedirect=(Component)=>{
  class redirectComponent extends React.Component{
      render() {
          if(this.props.isAuth===false){
              return <Redirect to='/login'/>;
          }
          return <Component {...this.props}/>
      }
  }


    return connect(mapStateToPropsForRedirect)(redirectComponent);


};