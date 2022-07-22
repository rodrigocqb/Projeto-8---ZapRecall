import Game from "../Game/Game";
import logo from "../../assets/img/main-logo.png";
import "./style.css";

export default function Welcome({ changeScreen }) {
    return (
        <>
            <div className="welcome">
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
                <div className="button" onClick={() => { changeScreen(<Game />) }} >Iniciar Recall!</div>
            </div>
        </>
    );
}