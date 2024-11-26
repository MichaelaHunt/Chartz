import Searchbar from "./Searchbar";
import "./Components.css";

function Navbar() {
    return (
        <>
            <ul>
                <li>CHARTZ</li>
                <li><Searchbar></Searchbar></li>
                <li>{/*if they're logged in, render "Saved Songs"; if else render "Log In" */}Temp</li>
            </ul>
        </>
    );
}

export default Navbar;