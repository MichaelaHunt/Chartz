import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import './Pages.css';

function Login() {
    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <div className="body">
                    <div className="loginContainer">
                        <div className="loginItem">
                            <h1 className="loginTitle">Log in to Chartz</h1>
                            <TextField email="placeholder"></TextField>
                            <div className="space"></div>
                            <TextField email="placeholder"></TextField>
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