import jwtDecode, { JwtPayload } from 'jwt-decode';
import type { UserLogin } from '../interfaces/UserLogin';


class AuthorizeUser {
    getProfile() {
        const token = this.getToken();
        if (!token) {
            throw new Error('No profile found!');
        }
        return jwtDecode<UserLogin>(token);
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
//create a function to check if the token is expired.
    isTokenExpired(token: string) {
        try {
            //try to decode the token and expect the token JwtPayLoad type.
            const decodedToken = jwtDecode<JwtPayload>(token);

            //check to see if the token is expired, if so return true.
            if (decodedToken?.exp && decodedToken?.exp < Date.now() / 1000) {
                return true;
            }
        } catch (error) {
            //if decoding fails, return false.
            return false;
        }
    }
//create a function to get the token from local storage.
    getToken(): string | null {
        const loggedInUser = localStorage.getItem('id_token') || '';
        return loggedInUser;
    }
    //create a function to log in the user.
    loginUser(userToken: string) {
        localStorage.setItem('id_token', userToken);
        window.location.assign('/');
    }
    //create a function to log out the user.
    logoutUser() {
        localStorage.removeItem('id_token');
        localStorage.removeItem("Id");
        window.location.assign('/');
    }
}

export default new AuthorizeUser();