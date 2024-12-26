import React from "react";

const REGEX_STRING = /^[a-zA-Z]+$/;
const REGEX_NUMBER = /^\d+$/;
const REGEX_CEP = /^\d{5}-?\d{3}$/;
const REGEX_CPF = /^\d{3}.?\d{3}.?\d{3}-?\d{2}$/;
const REGEX_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export default (name, initial, { pattern, required, regex } = {}) => {
    const [value, setValue] = React.useState(initial ? initial : "");
    const [error, setError] = React.useState(false);
    const [message, setMessage] = React.useState(null);

    function validate(value) {
        if (required && !value) {
            setError(true);
            setMessage("Preencha o campo");
        } else if (regex && regex instanceof RegExp && !regex.test(value)) {
            setError(true);
            setMessage("Valor inválido");
        } else if (pattern === "only_text" && !REGEX_STRING.test(value)) {
            setError(true);
            setMessage("Digite apenas números");
        } else if (pattern === "only_number" && !REGEX_NUMBER.test(value)) {
            setError(true);
            setMessage("Digite apenas números");
        } else if (pattern === "email" && !REGEX_EMAIL.test(value)) {
            setError(true);
            setMessage("E-mail inválido");
        }  else if (pattern === "cpf" && !REGEX_CPF.test(value)) {
            setError(true);
            setMessage("CPF inválido");
        } else if (pattern === "cep" && !REGEX_CEP.test(value)) {
            setError(true);
            setMessage("CEP inválido");
        }else {
            setError(false);
            setMessage(null);
            return true;
        }
        return false;
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
        required,
        handleChange,
        handleBlur,
        validate: () => validate(value)
    };
}
