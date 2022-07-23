import React from "react";
import logo from "../../assets/img/main-logo.png";
import "./style.css";

export default function Welcome({ setScreen, deck, setDeck }) {
    
    function handleChange(event) {
        setDeck(event.target.value);
        console.log(deck);
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
                <div className="button" onClick={() => {
                    (deck !== "") ? setScreen(false) :
                    alert("Escolha um deck antes de prosseguir")
                }} >Iniciar Recall!</div>
            </div>
        </>
    );
}