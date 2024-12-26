import React from "react";

const REGEX_CEP = /^\d{5}-?\d{3}$/;
const REGEX_CPF = /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/;
const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default (name, initial, { type, required, regex } = {}) => {
    const [value, setValue] = React.useState(initial ? initial : "");
    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState(null);

    function validate(value) {
        if (required && !value) {
            setError(true);
            setMessage("Preencha o campo.");
            return false;
        } else if (regex && regex instanceof RegExp && !regex.test(value)) {
            setError(true);
            setMessage("Valor inválido.");
        } else if (type === "cep" && !REGEX_CEP.test(value)) {
            setError(true);
            setMessage("CEP inválido.");
            return false;
        } else if (type === "cpf" && !REGEX_CPF.test(value)) {
            setError(true);
            setMessage("CPF inválido.");
            return false;
        } else if (type === "email" && !REGEX_EMAIL.test(value)) {
            setError(true);
            setMessage("E-mail inválido.");
            return false;
        } else {
            setError(false);
            setMessage(null);
        }
    }

    function handleChange(event) {
        const currentValue = event.target.value;
        setValue(currentValue);
        if (error) validate(currentValue);
    }

    function handleBlur(event) {
        const currentValue = event.target.value;
        validate(currentValue);
    }

    return {
        name,
        value,
        setValue,
        error,
        message,
        handleChange,
        handleBlur,
        validate: () => validate(value)
    };
}
