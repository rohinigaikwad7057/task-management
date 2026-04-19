const Navbar = ({ input, setInput, addTask, priority, setPriority }) => {
    return (
        <div className="bg-white px-6 py-4 flex justify-between items-center border-b">
            <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>

            <div className="flex gap-3">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search tasks..."
                    className="border rounded-lg px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-blue-400"
                />
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border px-2 py-1 rounded"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button
                    onClick={addTask}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default Navbar;