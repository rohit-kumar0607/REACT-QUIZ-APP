import QuizTimer from "./QuizTimer.jsx"
import Answers from "./Answers.jsx"
import { useState } from "react"
import QUESTIONS from "../questions.js"
export default function Questions({
    index,
    onselectanswer,
    onskip
}) {

    const [answer, setanswer] = useState({
        selectedanswer: '',
        isCorrect: null
    });

    let timer = 10000;
    if (answer.selectedanswer) {
        timer = 1000;
    }
    if (answer.isCorrect !== null) {
        timer = 2000;
    }


    function handleselectanswer(answer) {
        setanswer({
            selectedanswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setanswer({
                selectedanswer: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            })
            setTimeout(() => {
                onselectanswer(answer);

            }, 2000)
        }, 1000)
    }

    let answerstate = "";
    if (answer.selectedanswer && answer.isCorrect !== null) {
        answerstate = answer.isCorrect ? "correct" : "wrong";
    }
    else if (answer.selectedanswer) {
        answerstate = 'answered';

    }

    return <div id="questions">
        <QuizTimer
            timeout={timer}
            onTimeout={answer.selectedanswer === '' ? onskip : null}
            mode={answerstate}
            key={timer}
        />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers

            answers={QUESTIONS[index].answers}
            selectedanswer={answer.selectedanswer}
            answerstate={answerstate}
            onselect={handleselectanswer}
        />
    </div>
}