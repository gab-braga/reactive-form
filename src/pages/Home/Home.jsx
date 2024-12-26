import React from 'react';
import "./Home.css";

export default () => {
    return (
        <div className="container">
            <h1>Bitcoin Question</h1>
            <form>
                <fieldset>
                    <legend>O que é o leadger do Bitcoin?</legend>
                    <div>
                        <label>
                            <input type="radio" name="q1" id="op1" />
                            Opção I
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="q1" id="op2" />
                            Opção II
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="q1" id="op3" />
                            Opção III
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Explique o conceito de "Bitcoin"?</legend>
                    <div>
                        <label htmlFor="">
                            Resposta
                        </label>
                        <input type="text" name="q2" id="q2" />
                    </div>
                </fieldset>
                <button>Enviar</button>
            </form>
        </div>
    );
}
