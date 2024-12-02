import "./Components.css";

type TextFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
}

function TextField({label, value, onChange, errorMessage}: TextFieldProps) {
    return(
        <div className="textField">
        <h3>{label}</h3>
        <input
          className="loginInput"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={label === "Password" ? "password" : "text"}
        />
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    );
}

export default TextField;