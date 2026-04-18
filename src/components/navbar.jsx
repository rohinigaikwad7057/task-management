const Navbar = ({ input, setInput, addTask }) => {
    return (
        <div className="bg-white shadow p-4 flex justify-between">
            <h1 className="text-lg font-semibold">Dashboard</h1>

            <div className="flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border px-2 py-1 rounded"
                    placeholder="Enter task"
                />

                <button
                    onClick={addTask}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default Navbar;