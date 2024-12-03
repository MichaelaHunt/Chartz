import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import './Pages.css';
import Auth from '../utils/auth';
import { useState, type FormEvent, type ChangeEvent } from 'react';
import type { UserLogin } from '../interfaces/UserLogin';
import { login } from '../api/AuthAPI';

function Login() {
const [userLogin, setUserLogin] = useState<UserLogin>
({
    id: null,
    username: '',
    password: '',
});

const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserLogin({
        ...userLogin,
        [name]: value,
    });
};

const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
        const data = await login(userLogin);
        Auth.loginUser(data.token);
    } catch (error) {
        console.error('Failed to log in', error);
    }
};

    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <div className="body">
                    <div className="loginContainer">
                        <div className="loginItem">
                            <h1 className="loginTitle">Log in to Chartz</h1>
                            <TextField inputLabel="placeholder"></TextField>
                            <div className="space"></div>
                            <TextField inputLabel="placeholder"></TextField>
                            <p className="error">Incorrect login. Please try again.</p>
                            <button>Login</button>
                            <div className="row">
                                <div className='horizontalLine'></div>
                                <p>or</p>
                                <div className='horizontalLine'></div>
                            </div>
                            <Link
                                to="/signup"
                                className="signupLink">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;