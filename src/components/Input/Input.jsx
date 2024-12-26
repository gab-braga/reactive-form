import React from 'react';
import "./Input.css";

export default ({ label, type, id, name, value, setValue }) => {

    function handleChange({ target }) {
        setValue(target.value);
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type ? type : "text"}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
            />
            <div>{value}</div>
        </div>
    );
}