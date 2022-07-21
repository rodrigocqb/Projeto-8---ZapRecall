import React from "react";

export default function Questions({ id, question, answer }) {
    const [questionState, setQuestionState] = React.useState(<Closed />);

    function Closed() {
        return (
            <>
                <li className="question-closed">
                    <div>{"Pergunta " + id}</div>
                    <div onClick={() => { setQuestionState(<Open />) }} ><ion-icon name="play-outline"></ion-icon></div>
                </li>
            </>
        );
    }

    function Open() {
        return (
            <>
                <li className="question-open">
                    <p>{question}</p>
                    <img src="./img/setinha.png" alt="" onClick={() => { setQuestionState(<Recall />) }} />
                </li>
            </>
        );
    }

    function Recall() {
        return (
            <>
                <li className="question-open">
                    <p>{answer}</p>
                    <div className="colors">
                        <div className="red" onClick={() => { setQuestionState(<Answered color="red" />) }} ><p>Não lembrei</p></div>
                        <div className="yellow" onClick={() => { setQuestionState(<Answered color="yellow" />) }} ><p>Quase não lembrei</p></div>
                        <div className="green" onClick={() => { setQuestionState(<Answered color="green" />) }} ><p>Zap!</p></div>
                    </div>
                </li>
            </>
        );
    }

    function Answered({ color }) {
        switch (color) {
            case "red":
                return (
                    <>
                        <li className="question-answered R">
                            <div>{"Pergunta " + id}</div>
                            <div><ion-icon name="close-circle"></ion-icon></div>
                        </li>
                    </>
                );

            case "yellow":
                return (
                    <>
                        <li className="question-answered Y">
                            <div>{"Pergunta " + id}</div>
                            <div><ion-icon name="help-circle"></ion-icon></div>
                        </li>
                    </>
                );

            case "green":
                return (
                    <>
                        <li className="question-answered G">
                            <div>{"Pergunta " + id}</div>
                            <div><ion-icon name="checkmark-circle"></ion-icon></div>
                        </li>
                    </>
                );
        }
    }

    return (
        <>
            {questionState}
        </>
    );
}