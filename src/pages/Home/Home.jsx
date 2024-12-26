import React from 'react';
import "./Home.css";
import Input from '../../components/Input/Input';

export default () => {

    const [quest1, setQuest1] = React.useState("");

    return (
        <div className="container">
            <h1>Bitcoin Question</h1>
            <form>
                <fieldset>
                    <legend>Explique o conceito de "Bitcoin"?</legend>
                    <Input label="Resposta" id="q1" name="q1" value={quest1} setValue={setQuest1} />
                </fieldset>
                
                <button>Enviar</button>
            </form>
        </div>
    );
}
