import { useState } from "react";
export default function NewTask({addTask}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if(enteredTask.trim() === '') return;
        addTask(enteredTask);
        setEnteredTask('');
    }
    return <div className="felx items-center gap-4">
        <input onChange={handleChange} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200 mr-5" type="text" />
        <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
}