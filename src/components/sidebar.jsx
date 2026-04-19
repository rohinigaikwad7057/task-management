const Sidebar = () => {
  return (
    <div className="w-64 bg-linear-to-b from-[#1e293b] to-[#0f172a] text-white p-6">
      <h2 className="text-xl font-semibold mb-8">Task Manager</h2>

      <ul className="space-y-3">
        <li className="bg-white/10 px-3 py-2 rounded-lg cursor-pointer">
          Dashboard
        </li>
        <li className="px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
          Tasks
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;