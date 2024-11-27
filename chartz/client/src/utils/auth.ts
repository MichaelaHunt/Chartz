import { type JwtPayload, jwtDecode } from 'jwt-decode';
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
