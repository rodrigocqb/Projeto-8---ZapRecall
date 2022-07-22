import party from "../../assets/img/party.svg";
import sad from "../../assets/img/sad.svg";
import "./style.css";

export default function GameFooter({ answerValues }) {

    return (
        <footer className="footer">
            {(answerValues.length === 4) &&
                (answerValues.includes("red") ?
                    <div className="result">
                        <div className="result-title">
                            <img src={sad} alt="" />
                            <span>Putz...</span>
                        </div>
                        <div className="result-description">
                            <p>Ainda faltam alguns...
                                Mas não desanime!</p>
                        </div>
                    </div> :
                    <div className="result">
                        <div className="result-title">
                            <img src={party} alt="" />
                            <span>Parabéns!</span>
                        </div>
                        <div className="result-description">
                            <p>Você não esqueceu de nenhum flashcard!</p>
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
        </footer>
    );
}