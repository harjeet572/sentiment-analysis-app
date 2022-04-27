import React from "react";
import AuthenticationService from "./AuthenticationService";
import { Route, Redirect } from "react-router-dom";

class AuthenticatedRoute extends React.Component {

    render(){
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props}></Route>
        }else{
            return <Redirect to="/login"/>    
        }
    }
}
export default AuthenticatedRoute