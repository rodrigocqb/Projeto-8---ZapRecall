import logo from "../../assets/img/main-logo.png";
import "./style.css";

export default function GameHeader() {
    return (
        <header className="header">
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
        </header>
    );
}