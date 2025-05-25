import QUESTIONS from "../questions"
import Quizcomp from "../assets/quiz-complete.png"
export default function Summary({ UserAnswers }) {
    const skippedanswer = UserAnswers.filter((answer) => answer === null);
    const correctanswer = UserAnswers.filter((answer, index) =>
        answer === QUESTIONS[index].answers[0]
    )
    const skippedanswershare = Math.round((skippedanswer.length / UserAnswers.length) * 100);
    const correctanswershare = Math.round((correctanswer.length / UserAnswers.length) * 100);
    const wronganswershare = 100 - skippedanswershare - correctanswershare;

    return <div id="summary">
        <img src={Quizcomp} alt="" />
        <h2>Quiz-completed</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skippedanswershare}%</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number">{correctanswershare}%</span>
                <span className="text">Answered correctly</span>
            </p>
            <p>
                <span className="number">{wronganswershare}%</span>
                <span className="text">Answered wrong</span>
            </p>

        </div>
        <ol>
            {UserAnswers.map((answer, index) => {

                let cssclass = "user-answer"
                if (answer === null) {
                    cssclass += ' skipped';
                }
                else if (answer === QUESTIONS[index].answers[0]) {
                    cssclass += ' correct';
                }
                else {
                    cssclass += ' wrong'
                }
                return (
                    <li key={answer}>
                        <h3>{index + 1}</h3>
                        <p className="questions">{QUESTIONS[index].text}</p>
                        <p className={cssclass}>{answer ?? 'skipped'}</p>

                    </li>
                )
            })}
        </ol>

    </div>
}