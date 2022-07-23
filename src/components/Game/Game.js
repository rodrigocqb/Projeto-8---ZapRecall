import React from "react";
import GameFooter from "../GameFooter/GameFooter";
import GameHeader from "../GameHeader/GameHeader";
import Questions from "../Questions/Questions";
import "./style.css";

export default function Game({ setScreen, deck }) {
    const [answerValues, setAnswerValues] = React.useState([]);
    console.log(deck)
    let chosenDeck = [];

    const deckReact = [
        { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript." },
        { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces." },
        { question: "Componentes devem iniciar com __", answer: "letra maiúscula." },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma." },
        { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências." },
        { question: "Usamos props para __", answer: "passar diferentes informações para componentes." },
        { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente." },
    ];

    const deckST = [
        { question: "Em que temporada o Will foi para o mundo invertido?", answer: "Na primeira" },
        { question: "Qual a música que a Max usou para escapar do Vecna?", answer: "Running up that hill - Kate Bush" },
        { question: "Qual o verdadeiro nome da Eleven", answer: "Jane" },
        { question: "Quem foi a primeira vítima do Mindflayer", answer: "Billy" },
        { question: "Quem é o melhor amigo do Eddie?", answer: "Dustin" },
        { question: "Qual o nome do gato do Dustin", answer: "Mews" },
        { question: "Como a Joyce se comunica com o Will na primeira temporada?", answer: "Luzes de natal" }
    ];

    switch (deck) {
        case "React":
            chosenDeck = [...deckReact];
            break;

        case "Stranger Things":
            chosenDeck = [...deckST];
            break;

        default:
            return;
    }

    function randomize() {
        return Math.random() - 0.5;
    }

    const gamedeck = (chosenDeck.sort(randomize)).slice(0, 4);

    return (
        <>
            <GameHeader />
            <main>
                <ul>
                    {gamedeck.map((value, index) => <Questions question={value.question} answer={value.answer}
                        id={index + 1} key={index}
                        setAnswerValues={setAnswerValues} />)}
                </ul>
            </main>
            <GameFooter answerValues={answerValues} setScreen={setScreen} />
        </>
    )
}