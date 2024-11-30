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
                            <TextField></TextField>
                            <TextField></TextField>
                            <p className="error">Incorrect login. Please try again.</p> {/*visibility: hidden*/}
                            <button>Login</button>
                            <p>or</p>
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;