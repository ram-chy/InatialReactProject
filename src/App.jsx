import { useState } from "react";
import { initialTasks } from "../data/task.js";
import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
function App() {
    const [tasks, setTasks] = useState(initialTasks);

    const getNexId = (data) => {
        const maxId = data.reduce((prev, current) => prev && prev.id > current.id ? prev.id : current.id);

        return maxId + 1;


    }

    //handalers

    cost handleAddTask = () => {
        setTasks([
            ...tasks,
            {
                id: 0,
                text: 'Visit Kafka Museum',
                done: true
            },
        ])
    }
    return (
        <>
            <div className="max-w-fit mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white space-y-4">
                <h1 className="text-4xl text-green-900">Add Task</h1>

                <AddTask />

                <TaskList tasks={tasks} />




            </div>


        </>
    );
}

export default App;