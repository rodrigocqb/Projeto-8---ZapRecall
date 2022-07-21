import Welcome from "./Welcome";
import React from "react";

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