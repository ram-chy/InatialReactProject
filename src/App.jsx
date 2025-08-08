import {useReducer} from 'react';
import {initialTasks} from '../data/task.js';
import AddTask from './components/AddTask.jsx';
import TaskList from './components/TaskList.jsx';
import taskReducer from "../reducer/taskReducer.js";

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    const getNexId = (data) => {
        const maxId = data.reduce((prev, current) =>
            prev && prev.id > current.id ? prev.id : current.id
        );
        return maxId + 1;
    };

    //handalers
    const handleAddTask = (text) => {
        dispatch(
            {
                type: 'added',
                text,
                id: getNexId(tasks),
            }
        )

    };

    const handleChangeTask = (task) => {

    };

    const handleDeleteTask = (taskId) => {

    };

    return (
        <>
            <div className='max-w-fit mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white space-y-4'>
                <h1 className='text-4xl text-green-900'>Add Task</h1>

                <AddTask onAdd={handleAddTask}/>

                <TaskList
                    tasks={tasks}
                    onChangeTask={handleChangeTask}
                    onDeleteTask={handleDeleteTask}/>
            </div>
        </>
    );
}

export default App;
