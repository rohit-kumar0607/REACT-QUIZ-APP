import { useCallback, useState } from "react"
import QUESTIONS from "../questions.js"
import Summary from "./Summary.jsx";
import Questions from "./Questions.jsx";

export default function Quiz() {

    const [UserAnswers, setUserAnswers] = useState([]);
    const Activequestionindex = UserAnswers.length;
    const Quiziscomp = Activequestionindex === QUESTIONS.length;

    const handleselectans = useCallback(function handleselectans(selectedanswer) {

        setUserAnswers((prevstate) => {
            return [...prevstate, selectedanswer];
        });

    }, [])
    const handleskipanswer = useCallback(() => handleselectans(null), [handleselectans])

    if (Quiziscomp) {
        return <Summary UserAnswers={UserAnswers} />
    }

    return (<div id="quiz">
        <Questions
            key={Activequestionindex}
            index={Activequestionindex}
            onselectanswer={handleselectans}
            onskip={handleskipanswer}
        />
    </div>
    )
}