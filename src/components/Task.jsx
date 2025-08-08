import {useState} from 'react';

export default function Task({task, onChangeTask, onDeleteTask}) {
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => onChangeTask({
                        ...task,
                        text: e.target.value,
                    })}
                    type='text'
                    className='flex-1 p-2 border border-gray-300 rounded-md focus:outline-none'
                />

                <button
                    onClick={() => setIsEditing(false)}
                    className='bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition'>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}

                <button
                    onClick={() => setIsEditing(true)}
                    className='bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition'>
                    Edit
                </button>
            </>
        );
    }
    return (
        <>
            <li className='flex items-center space-x-2 p-2 border rounded-md w-full'>
                <input
                    type='checkbox'
                    className='h-5 w-5 text-blue-600 rounded border-gray-300'
                    checked={task.done}
                    onChange={(e) => {
                        onChangeTask({
                            ...task,
                            done: e.target.checked,
                        });
                    }}
                />

                {taskContent}

                <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition'
                        onClick={() => onDeleteTask(task.id)}>
                    Delete
                </button>
            </li>
        </>
    );
}
