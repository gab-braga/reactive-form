import React from 'react';
import "./Home.css";
import Input from '../../components/Input/Input';
import useInput from '../../hooks/useInput';

export default () => {
    const cep = useInput("cep", "", { type: "cep", required: true });

    return (
        <div className="container">
            <h1>Cadastre-se</h1>
            <form>
                <fieldset>
                    <legend>Dados de Endereço</legend>
                    <Input label="CEP" id="cep" {...cep} />
                </fieldset>

                <button>Enviar</button>
            </form>
        </div>
    );
}
