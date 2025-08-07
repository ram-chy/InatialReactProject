
export default function AddTask() {
    return (

        <>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Enter item"
                    className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Add
                </button>
            </div>

        </>
    )
}
