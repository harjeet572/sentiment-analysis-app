import axios from "axios"
import API_URL from '../Constants'
import USER_NAME_SESSION_ATTRIBUTE_NAME from '../Constants'

class AuthenticationService {

    authenticateUserWithBasicAuth(username,password) {
        console.log("called authenticateUser "+username + "/" + password)
        return axios.get(`${API_URL}/basicauth`,{ headers: 
        {
            authorization: this.getBasicAuthToken(username,password)
        }
    });
    }

    authenticateUserWithJwtAuthToken(username,password) {
        console.log("called authenticateUser "+username + "/" + password)
        return axios.post(`${API_URL}/authenticate`,{ username, password})
    }

    getBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ':' + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.getBasicAuthToken(username,password))
    }

    registerSuccessfulLoginWithJwtToken(username, token) {
        console.log('token='+token)
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.getJwtAuthToken(token))
    }    
    getJwtAuthToken(token){
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let username = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (username === null) return false
        return true;
    }

    getLoggedInUser() {
        return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn) {
                    config.headers.authorization = token
                }
                return config
            }
        )
        
    }    
}
export default new AuthenticationService()