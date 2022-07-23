import React from "react";
import logo from "../../assets/img/main-logo.png";
import "./style.css";

export default function Welcome({ setScreen, deck, setDeck, zapTarget, setZapTarget }) {
    const [disableButton, setDisableButton] = React.useState(" disabled");

    function handleChange(event) {
        setDeck(event.target.value);
    }

    return (
        <>
            <div className="welcome">
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
                <select value={deck} onChange={handleChange}>
                    <option className="placeholder" value="" disabled hidden>Escolha seu deck</option>
                    <option value="React">React</option>
                    <option value="Stranger Things">Stranger Things</option>
                </select>
                <input placeholder="Digite sua meta de zaps..." className="target" onChange={(e) => {
                    setZapTarget(e.target.value);
                    if (e.target.value >= 1 && e.target.value <= 4) {
                        setDisableButton("");
                    }
                    else {
                        setDisableButton(" disabled")
                    }
                }}></input>
                <div className={"button" + disableButton} onClick={() => {
                    (zapTarget < 1 || zapTarget > 4 || isNaN(zapTarget)) ?
                        alert("Insira uma meta de zaps com mínimo 1 e máximo 4") :
                        ((deck !== "") ? setScreen(false) :
                            alert("Escolha um deck antes de prosseguir"))
                }} >Iniciar Recall!</div>
            </div>
        </>
    );
}