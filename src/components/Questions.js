export default function Questions({id}) {


    return (
        <>
            <div className="question-closed">
                <div>{"Pergunta " + id}</div>
                <div><ion-icon name="play-outline"></ion-icon></div>
            </div>
        </>
    );
}