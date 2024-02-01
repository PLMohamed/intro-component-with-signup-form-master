function InputField({ type, name, placeholder }) {
    return (
        <div className="input-field">
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    );
}

export default InputField;
