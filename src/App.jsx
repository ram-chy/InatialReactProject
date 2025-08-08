import {useState} from 'react';
import {initialTasks} from '../data/task.js';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';

function App() {
    const [tasks, setTasks] = useState(initialTasks);

    const getNexId = (data) => {
        const maxId = data.reduce((prev, current) =>
            prev && prev.id > current.id ? prev.id : current.id
        );
        return maxId + 1;
    };

    //handalers
    const handleAddTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: getNexId(tasks),
                text: text,
                done: false,
            },
        ]);
    };

    const handleChageTask = (task) => {
        const nextChange = tasks.map((t) => {
            if (t.id === task.id) {
                return task;
            } else {
                return t;
            }
        });
        setTasks(nextChange);
    };

    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter((t) => t.id !== taskId));
    };

    return (
        <>
            <div className='max-w-fit mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white space-y-4'>
                <h1 className='text-4xl text-green-900'>Add Task</h1>

                <AddTask onAdd={handleAddTask}/>

                <TaskList
                    tasks={tasks}
                    onChangeTask={handleChageTask}
                    onDeleteTask={handleDeleteTask}/>
            </div>
        </>
    );
}

export default App;
