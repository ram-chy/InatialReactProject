import Task from "./Task.jsx";

export default function TaskList({ tasks }) {
    return (
        <>
            <ul className="space-y-2">
                {tasks.map((task => <Task key={task.id} task={task} />))}
            </ul>
        </>
    )
}
