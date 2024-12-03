import "./Components.css";

function TextField({inputLabel}: {inputLabel: string}) {
    return(
        <div className="textField">
            <h3>{inputLabel}</h3>
            <input className="loginInput"></input>
        </div>
    );
}

export default TextField;