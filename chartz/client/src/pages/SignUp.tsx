import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import './Pages.css';
import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";  
import Auth from "../utils/auth"; 
import { signUp } from "../api/SignUp";

interface SignUpForm {
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
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
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
            navigate("/"); // Redirect to home page
        } catch (error) {
            console.error("Signup failed:", error);
            setErrors({ ...errors, email: "Signup failed. Please try again." });
        }
    };

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
                        {errors.username && <p className="error">{errors.username}</p>}

                        {/* Email Input */}
                        <TextField
                            inputLabel="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}

                        {/* Password Input */}
                        <TextField
                            inputLabel="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}

                        {/* Confirm Password Input */}
                        <TextField
                            inputLabel="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && (
                            <p className="error">{errors.confirmPassword}</p>
                        )}

                        {/* Submit Button */}
                        <button onClick={handleSubmit}>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
