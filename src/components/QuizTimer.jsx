import { useEffect, useState } from "react"

export default function QuizTimer({ timeout, onTimeout, mode }) {

    const [remainingtime, setremainingtime] = useState(timeout);
    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)
        return () => {
            clearTimeout(timer);
        }

    },
        [timeout, onTimeout])


    useEffect(() => {
        const interval = setInterval(() => {
            setremainingtime((prevremaintime) => prevremaintime - 100);
        }, 100);
        return () => {
            clearInterval(interval);
        }
    }, []
    )


    return <progress id="question-time" max={timeout} value={remainingtime} className={mode} />
}