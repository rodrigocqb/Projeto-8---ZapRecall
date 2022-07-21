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
                        <div className="red"><p>Não lembrei</p></div>
                        <div className="yellow"><p>Quase não lembrei</p></div>
                        <div className="green"><p>Zap!</p></div>
                    </div>
                </li>
            </>
        );
    }

    return (
        <>
            {questionState}
        </>
    );
}