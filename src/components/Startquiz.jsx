export default function Startquiz({ onStart }) {
    return (<div id="startpage">
        <h1>Welcome to the React Quiz!</h1>
        <p>Test your knowledge and see how well you do.</p>
        <button onClick={onStart} id="startbutton">Start Quiz</button>
    </div>)
}