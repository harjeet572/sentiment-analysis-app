import React from "react";
import AuthenticationService from "../services/AuthenticationService";

class WelcomeComponent extends React.Component {

    render() {
    const user = AuthenticationService.getLoggedInUser();
        return (
            <>
                <h1>Welcome {user}!!!</h1>
            </>
        )
    }

}
export default WelcomeComponent