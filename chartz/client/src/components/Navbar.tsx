import "./Components.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import auth from "../utils/auth";

function Navbar() {
    // State to track if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkLogin = async () => {
        if (auth.loggedIn()) {
            setIsLoggedIn(true);
        }
    };

    useEffect(() => {
        checkLogin();
    }, [isLoggedIn]);



    return (
        <div className="navContainer">
            <ul>
                <li className='nav-bar-links'>
                    <Link to="/" className="chartz-link">CHARTZ</Link>
                </li>
                <li>
                    {isLoggedIn ? (
                        <>
                            <Link className="linkButton" to="/Saved">Saved Songs</Link>

                            <button className="linkButton" onClick={() => {
                                auth.logoutUser();
                            }}>Logout</button>
                        </>
                    ) : (
                        <Link className="linkButton"
                            to="/login">
                            Log in
                        </Link>
                    )}
                </li>

            </ul>
        </div>
    );
}

export default Navbar;
