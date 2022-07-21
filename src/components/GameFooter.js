export default function GameFooter({ answerValues }) {
    console.log(answerValues);
    return (
        <footer>
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
                    }
                })}
            </div>
        </footer>
    );
}