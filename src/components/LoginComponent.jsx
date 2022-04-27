import React from "react";
import AuthenticationService from "../services/AuthenticationService";

class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "admin",
            password: "admin",
            hasLoginFailed: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    render() {
        return (
            <>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials!!!</div>}
                    User:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" name="login" onClick={this.handleLogin}>Login</button>
                </div>
            </>
        )
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin() {
         if (this.state.username === 'admin' && this.state.password === 'admin') {
             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
             this.props.history.push(`/welcome/${this.state.username}`)
         } else {
             this.setState({ hasLoginFailed: true })
         }
            /* AuthenticationService.authenticateUserWithBasicAuth(this.state.username, this.state.password)
            .then(()=> {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/welcome/${this.state.username}`)
            })
            .catch(() => {
                this.setState({ hasLoginFailed: true })
            }) */

           /*  AuthenticationService.authenticateUserWithJwtAuthToken(this.state.username, this.state.password)
            .then((response)=> {
                AuthenticationService.registerSuccessfulLoginWithJwtToken(this.state.username, 
                    response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }) */
            /* .catch(() => {
                this.setState({ hasLoginFailed: true })
            }) */

    }

}
export default LoginComponent