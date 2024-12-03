import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import './Pages.css';

function SignUp() {
    return (
        <>
            <div className="page">
                <Navbar></Navbar>
                <div className="body">
                    <div className="loginContainer">
                        <div className="loginItem">
                            <h1 className="loginTitle">Sign up for Chartz</h1>
                            <TextField inputLabel="placeholder"></TextField>
                            <p className="error">Invalid email. Try again.</p>
                            <TextField inputLabel="placeholder"></TextField>
                            <p className="error">Password does not have [whatever]</p> 
                            <TextField inputLabel="placeholder"></TextField>
                            <p className="error">Passwords do not match.</p> 
                            <button>Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;