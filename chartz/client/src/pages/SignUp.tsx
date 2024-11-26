import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import './Pages.css';

function SignUp() {
    return (
        <>
            <div className="body">
                <Navbar></Navbar>
                <div className="loginContainer">
                    <h1 className="loginTitle">Sign up for Chartz</h1>
                    <TextField></TextField>
                    <p className="error">Invalid email. Try again.</p> {/*visibility: hidden*/}
                    <TextField></TextField>
                    <p className="error">Password does not have [whatever]</p> {/*visibility: hidden*/}
                    <TextField></TextField>
                    <p className="error">Passwords do not match.</p> {/*visibility: hidden*/}
                    <button>Create Account</button>
                </div>
            </div>
        </>
    );
}

export default SignUp;