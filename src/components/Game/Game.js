import React from "react";
import GameFooter from "../GameFooter/GameFooter";
import GameHeader from "../GameHeader/GameHeader";
import Questions from "../Questions/Questions";
import "./style.css"

export default function Game() {
    const [answerValues, setAnswerValues] = React.useState([]);

    function randomize() {
        return Math.random() - 0.5;
    }

    const deck = [
        { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript.' },
        { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces.' },
        { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula.' },
        { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
        { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma.' },
        { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências.' },
        { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes.' },
        { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.' },
    ];

    const gamedeck = (deck.sort(randomize)).slice(0, 4);

    return (
        <>
            <GameHeader />
            <main>
                <ul>
                    {gamedeck.map((value, index) => <Questions question={value.question} answer={value.answer}
                        id={index + 1} key={index}
                        answerValues={answerValues}
                        setAnswerValues={setAnswerValues} />)}
                </ul>
            </main>
            <GameFooter answerValues={answerValues} />
        </>
    )
}