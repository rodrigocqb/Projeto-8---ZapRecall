import Welcome from "./Welcome/Welcome";
import Game from "./Game/Game";
import React from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
    const [screen, setScreen] = React.useState(true);

    return (
        <>
            {screen ?
            (<Welcome setScreen={setScreen} />) :
            (<Game setScreen={setScreen} />)}
        </>
    );
}