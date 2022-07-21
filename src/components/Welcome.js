import Game from "./Game";

export default function Welcome({ changeScreen }) {
    return (
        <>
            <div className="welcome">
                <img src="./img/main-logo.png" alt="" />
                <h1>ZapRecall</h1>
                <div className="button" onClick={() => { changeScreen(<Game />) }} >Iniciar Recall!</div>
            </div>
        </>
    );
}