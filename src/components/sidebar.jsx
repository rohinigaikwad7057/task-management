const Sidebar = () => {
    return (
        <div className="w-60 bg-gray-800 text-white p-5">
            <h2 className="text-xl font-bold mb-6">Task Manager</h2>

            <ul className="space-y-3">
                <li className="cursor-pointer hover:text-gray-300">Dashboard</li>
                <li className="cursor-pointer hover:text-gray-300">Tasks</li>
            </ul>
        </div>
    );
};

export default Sidebar;