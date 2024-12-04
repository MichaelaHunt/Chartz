import "./Components.css";

interface TextFieldProps {
    inputLabel: string | null;
    name: string | null;
    value: string | null;
    type?: string | null; 
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ inputLabel, name, value, type = "text", onChange }: TextFieldProps) {
    return (
        <div className="textField">
            <h3>{inputLabel}</h3>
            <input
                className="loginInput"
                type={type ?? "text"}
                name={name ?? undefined}
                value={value ?? ""}
                onChange={onChange}
            />
        </div>
    );
}

export default TextField;