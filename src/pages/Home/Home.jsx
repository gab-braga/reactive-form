import React from 'react';
import "./Home.css";
import Input from '../../components/Input/Input';
import useInput from '../../hooks/useInput';

export default () => {
    const firstName = useInput("firstName", "", { required: true });
    const lastName = useInput("lastName", "", { required: true });
    const email = useInput("email", "", { pattern: "email", required: true });
    const pass = useInput("pass", "", { required: true });
    const cpf = useInput("cpf", "", { pattern: "cpf", required: true });

    const address = useInput("address", "", { required: true });
    const number = useInput("number", "", { pattern: "only_number", required: true });
    const city = useInput("city", "", { pattern: "only_text", required: true });
    const state = useInput("state", "", { pattern: "only_text", required: true });
    const cep = useInput("cep", "", { pattern: "cep", required: true });

    function handleSubmit(event) {
        event.preventDefault();
        const inputs = [firstName, lastName, email, pass, cpf, address, number, city, state, cep];
        const validation = inputs.reduce((current, input) => current && input.validate(), true);
        if (validation) {
            const data = inputs.reduce((current, {name, value}) => ({...current, [name]: value}), {});
            console.log(data);
        }
    }

    return (
        <div className="container">
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Dados Pessoais</legend>

                    <Input label="Nome" id="firstName" {...firstName} />

                    <Input label="Sobrenone" id="lastName" {...lastName} />

                    <Input label="E-mail" id="email" {...email} />

                    <Input label="Senha" id="pass" type="password" {...pass} />

                    <Input label="CPF" id="cpf" {...cpf} />
                </fieldset>

                <fieldset>
                    <legend>Dados de Endereço</legend>

                    <Input label="Logradouro" id="address" {...address} />

                    <Input label="Número" id="number" {...number} />

                    <Input label="Cidade" id="city" {...city} />

                    <Input label="Estado" id="state" {...state} />

                    <Input label="CEP" id="cep" {...cep} />
                </fieldset>

                <button>Enviar</button>
            </form>
        </div>
    );
}
