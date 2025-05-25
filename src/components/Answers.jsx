import { useRef } from "react";
export default function Answers({ answers, selectedanswer, answerstate, onselect }) {
    const Shuffleanswer = useRef();
    if (!Shuffleanswer.current) {
        Shuffleanswer.current = [...answers];
        Shuffleanswer.current.sort(() => Math.random() - 0.5)
    }
    return <ul id="answers">
        {Shuffleanswer.current.map((answer) => {
            const isselected = selectedanswer === answer;
            let cssclasses = "";

            if (answerstate === "answered" && isselected) {
                cssclasses = " selected"
            }
            if ((answerstate === "correct" || answerstate === "wrong") && isselected) {
                cssclasses = answerstate
            }
            return <li key={answer} className="answer">
                <button onClick={() =>
                    onselect(answer)}
                    className={cssclasses}
                    disabled={answerstate !== ''}
                >{answer}</button>

            </li>
        })}

    </ul>

}