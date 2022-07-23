import Welcome from "./Welcome/Welcome";
import Game from "./Game/Game";
import React from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
    const [screen, setScreen] = React.useState(true);
    const [deck, setDeck] = React.useState("");
    const [zapTarget, setZapTarget] = React.useState();

    return (
        <>
            {screen ?
                (<Welcome setScreen={setScreen} deck={deck} setDeck={setDeck} setZapTarget={setZapTarget} />) :
                (<Game setScreen={setScreen} deck={deck} zapTarget={zapTarget} />)}
        </>
    );
}