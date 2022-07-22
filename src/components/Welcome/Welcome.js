import logo from "../../assets/img/main-logo.png";
import "./style.css";

export default function Welcome({ setScreen }) {
    return (
        <>
            <div className="welcome">
                <img src={logo} alt="" />
                <h1>ZapRecall</h1>
                <div className="button" onClick={() => { setScreen(false) }} >Iniciar Recall!</div>
            </div>
        </>
    );
}