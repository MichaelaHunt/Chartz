import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import './Pages.css';
import Auth from '../utils/auth';
import { useState, type FormEvent, type ChangeEvent } from 'react';
import type { UserLogin } from '../interfaces/UserLogin';
import { login } from '../api/AuthAPI';



function Login() {
    // State to track user login
const [userLogin, setUserLogin] = useState<UserLogin>
({
    id: 0,
    username: '',
    password: '',
    email: '',
});

// Function to handle changes in the input fields
const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserLogin({
        ...userLogin,
        [name]: value,
    });
};

// Function to handle form submission
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
                        
                        {/* Username Input */}
                        <TextField
                            inputLabel="Username"
                            name="username"
                            value={userLogin.username}
                            onChange={handleChange}
                        />

                        <div className="space"></div>

                        {/* Password Input */}
                        <TextField
                            inputLabel="Password"
                            type="password"
                            name="password"
                            value={userLogin.password}
                            onChange={handleChange}
                        />

                        {/* Error Message */}
                        <p className="error">Incorrect login. Please try again.</p>

                        {/* Submit Button */}
                        <button onClick={handleSubmit}>Login</button>

                        <div className="row">
                            <div className='horizontalLine'></div>
                            <p>or</p>
                            <div className='horizontalLine'></div>
                        </div>

                        {/* Signup Link */}
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