import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import AuthenticationService from "../services/AuthenticationService";

class HeaderComponent extends React.Component{   
    
    render(){
        const userLoggedIn = AuthenticationService.isUserLoggedIn();
        const user = AuthenticationService.getLoggedInUser();
        //console.log(userLoggedIn)
        return(            
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <ul className="navbar-nav ">
                        {userLoggedIn && <li><Link className="nav-link" to='/welcome'>Home</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!userLoggedIn && <li><Link className="nav-link" to='/login'>Login</Link></li>}
                    {userLoggedIn && <li><Link className="nav-link" to='/logout' onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
   
}

export default withRouter(HeaderComponent)