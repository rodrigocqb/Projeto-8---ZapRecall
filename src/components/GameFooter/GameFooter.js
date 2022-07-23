import party from "../../assets/img/party.svg";
import sad from "../../assets/img/sad.svg";
import "./style.css";

export default function GameFooter({ answerValues, setScreen, zapTarget, reset }) {

    function rightAnswer(value) {
        if (value === "green") {
            return true;
        }
    }

    let zapArray = answerValues.filter(rightAnswer);

    return (
        <footer className="footer">
            {(answerValues.length === 4) &&
                (zapArray.length < zapTarget ?
                    <div className="result">
                        <div className="result-title">
                            <img src={sad} alt="" />
                            <span>Putz...</span>
                        </div>
                        <div className="result-description">
                            <p>Ainda faltam alguns para sua meta...
                                Mas não desanime!</p>
                        </div>
                    </div> :
                    <div className="result">
                        <div className="result-title">
                            <img src={party} alt="" />
                            <span>Parabéns!</span>
                        </div>
                        <div className="result-description">
                            <p>Você atingiu sua meta de flashcards!</p>
                        </div>
                    </div>)}
            <div className="answered">{answerValues.length}/4 CONCLUÍDOS</div>
            <div className="answer-icons">
                {(answerValues !== []) && answerValues.map((value, index) => {
                    switch (value) {
                        case "red":
                            return (
                                <div key={index} className="R">
                                    <ion-icon name="close-circle"></ion-icon>
                                </div>
                            );

                        case "yellow":
                            return (
                                <div key={index} className="Y">
                                    <ion-icon name="help-circle"></ion-icon>
                                </div>
                            );

                        case "green":
                            return (
                                <div key={index} className="G">
                                    <ion-icon name="checkmark-circle"></ion-icon>
                                </div>
                            );

                        default:
                            return (
                                <></>
                            );
                    }
                })}
            </div>
            {answerValues.length === 4 &&
                <div className="restart" onClick={() => {
                    setScreen(true);
                }} >REINICIAR RECALL</div>}
        </footer>
    );
}