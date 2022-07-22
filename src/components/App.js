import Welcome from "./Welcome/Welcome";
import React from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
    const [screen, setScreen] = React.useState(<Welcome changeScreen={changeScreen} />);

    function changeScreen(screen) {
        setScreen(screen);
    }

    return (
        <>
            {screen}
        </>
    );
}