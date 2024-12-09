import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import './Pages.css';
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import { signUp } from "../api/SignUp";

interface SignUpForm {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface Errors {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function SignUp() {
    // State to manage form inputs
    const [formData, setFormData] = useState<SignUpForm>({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // State to manage error messages
    const [errors, setErrors] = useState<Errors>({
        username: "hello",
        email: "hello",
        password: "hello",
        confirmPassword: "hello",
    });

    const navigate = useNavigate(); // For navigation

    // Handle input changes
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Validate inputs
    const validateForm = () => {
        const newErrors = {
            username: "hello",
            email: "hello",
            password: "hello",
            confirmPassword: "hello",
        };

        let isValid = true;

        // Validate username
        if (!formData.username) {
            newErrors.username = "Username is required.";
            isValid = false;
        }

        // Validate email
        if (!formData.email.includes("@")) {
            newErrors.email = "Invalid email address.";
            isValid = false;
        }

        // Validate password
        if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
            isValid = false;
        }

        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const data = await signUp(formData); // Send data to backend
            Auth.loginUser(data.token); // Automatically log in user
            
            localStorage.setItem("Id", data.id);
            navigate("/"); // Redirect to home page
        } catch (error) {
            console.error("Signup failed:", error);
            setErrors({ ...errors, email: "Signup failed. Please try again." });
        }
    };

    useEffect(() => {
        const userEl = document.getElementById("usernameError");
        const emailEl = document.getElementById("emailError");
        const passEl = document.getElementById("passwordError");
        const confirmEl = document.getElementById("confirmPasswordError");
        
        if (userEl)
            errors.username != "hello" ? userEl.style.visibility = 'visible' : userEl.style.visibility = 'hidden';
        if (emailEl)
            errors.email != "hello" ? emailEl.style.visibility = 'visible' : emailEl.style.visibility = 'hidden';
        if (passEl)
            errors.password != "hello" ? passEl.style.visibility = 'visible' : passEl.style.visibility = 'hidden';
        if (confirmEl)
            errors.confirmPassword != "hello" ? confirmEl.style.visibility = 'visible' : confirmEl.style.visibility = 'hidden';

    }, [errors]);

    return (
        <div className="page">
            <Navbar />
            <div className="body">
                <div className="loginContainer">
                    <div className="loginItem">
                        <h1 className="loginTitle">Sign up for Chartz</h1>

                        {/* Username Input */}
                        <TextField
                            inputLabel="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <p className="error" id="usernameError">{errors.username}</p>

                        {/* Email Input */}
                        <TextField
                            inputLabel="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <p className="error" id="emailError">{errors.email}</p>

                        {/* Password Input */}
                        <TextField
                            inputLabel="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <p className="error" id="passwordError">{errors.password}</p>

                        {/* Confirm Password Input */}
                        <TextField
                            inputLabel="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <p className="error" id="confirmPasswordError">{errors.confirmPassword}</p>

                        {/* Submit Button */}
                        <button className="signupLink" onClick={handleSubmit}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
