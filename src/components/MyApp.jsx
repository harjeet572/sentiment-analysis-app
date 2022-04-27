import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from "../services/AuthenticatedRoute";

class MyApp extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <>
                    <HeaderComponent/>
                     <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                      </Switch>
                      <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}
export default MyApp