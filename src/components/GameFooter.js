import React from "react";

export default function GameFooter() {
    const [answered, setAnswered] = React.useState(0);
    const [answerValues, setAnswerValues] = React.useState("");

    return (
        <footer>
            <div className="answered">{answered}/4 CONCLUÍDOS</div>
            {(answerValues !== "") && <div>{answerValues}</div>}
        </footer>
    );
}