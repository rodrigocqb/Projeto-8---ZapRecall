export default function GameFooter({answerValues}) {
    console.log(answerValues);
    return (
        <footer>
            <div className="answered">{answerValues.length}/4 CONCLUÍDOS</div>
            {(answerValues !== []) && <div>{"eae"}</div>}
        </footer>
    );
}