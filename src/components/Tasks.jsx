import { useState } from "react"
import NewTask from "./NewTask"
export default function Tasks({add, onDelete, tasks}) {

    const addTask = (task) => {
        add(task);
    }
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask addTask={addTask}/>
    
        {tasks.length > 0 ?
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map((task) => <li className="flex justify-between my-4" key={task.taskId}>
                    <span>{task.text}</span>
                    <button onClick={() => onDelete(task.taskId)} className="text-stone-700 hover:text-red-500">Clear</button>
                    </li> )}
            </ul> : <p className=" text-stone-800 mb-4">This project does not have any task </p>
        }
    </section>
}