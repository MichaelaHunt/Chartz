import "./Components.css";

function TextField({email}: {email: string}) {
    return(
        <div className="textField">
            <h3>{email}</h3>
            <input className="loginInput"></input>
        </div>
    );
}

export default TextField;