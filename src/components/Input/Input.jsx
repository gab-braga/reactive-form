import React from 'react';
import "./Input.css";

export default ({
    label,
    type,
    id,
    name,
    value,
    error,
    message,
    handleChange,
    handleBlur
}) => {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type ? type : "text"}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            {error && <p className="error">{message}</p>}
        </div>
    );
}