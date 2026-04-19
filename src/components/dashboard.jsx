import React from "react";
import TaskCard from "./taskCard";

const Dashboard = ({ task, updateTaskStatus, deleteTask, onEdit }) => {
    const todoTasks = task.filter((t) => t.status === "todo");
    const inProgress = task.filter((t) => t.status === "progress");
    const completedTasks = task.filter((t) => t.status === "completed");

    return (
        <div className="p-6 bg-gray-100 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* ================= TO DO ================= */}
                <div className="bg-white rounded-2xl shadow-sm  flex flex-col h-[75vh]">

                    {/* Header */}
                    <div className="flex justify-between items-center px-4 py-3 ">
                        <h2 className="font-semibold text-gray-700">
                            To Do ({todoTasks.length})
                        </h2>
                        <span className="text-gray-400 cursor-pointer">⋯</span>
                    </div>

                    {/* Task List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {todoTasks.length === 0 ? (
                            <p className="text-gray-400 text-sm">No tasks</p>
                        ) : (
                            todoTasks.map((t) => (
                                <TaskCard
                                    key={t.id}
                                    task={t}
                                    onStart={() => updateTaskStatus(t.id, "progress")}
                                    onDelete={() => deleteTask(t.id)}
                                    onEdit={() => onEdit(t)}
                                />
                            ))
                        )}
                    </div>

                    {/* Add Button */}
                    <div className="p-4">
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-md">
                            + Add task
                        </button>
                    </div>
                </div>

                {/* ================= IN PROGRESS ================= */}
                <div className="bg-white rounded-2xl shadow-sm  flex flex-col h-[75vh]">

                    {/* Header */}
                    <div className="flex justify-between items-center px-4 py-3">
                        <h2 className="font-semibold text-gray-700">
                            In Progress ({inProgress.length})
                        </h2>
                        <span className="text-gray-400 cursor-pointer">⋯</span>
                    </div>

                    {/* Task List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {inProgress.length === 0 ? (
                            <p className="text-gray-400 text-sm">No tasks</p>
                        ) : (
                            inProgress.map((t) => (
                                <TaskCard
                                    key={t.id}
                                    task={t}
                                    onComplete={() => updateTaskStatus(t.id, "completed")}
                                    onDelete={() => deleteTask(t.id)}
                                    onEdit={() => onEdit(t)}
                                />
                            ))
                        )}
                    </div>

                    {/* Add Button */}
                    <div className="p-4">
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-md">
                            + Add task
                        </button>
                    </div>
                </div>

                {/* ================= COMPLETED ================= */}
                <div className="bg-white rounded-2xl shadow-sm  flex flex-col h-[75vh]">

                    {/* Header */}
                    <div className="flex justify-between items-center px-4 py-3">
                        <h2 className="font-semibold text-gray-700">
                            Completed ({completedTasks.length})
                        </h2>
                        <span className="text-gray-400 cursor-pointer">⋯</span>
                    </div>

                    {/* Task List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {completedTasks.length === 0 ? (
                            <p className="text-gray-400 text-sm">No tasks</p>
                        ) : (
                            completedTasks.map((t) => (
                                <TaskCard
                                    key={t.id}
                                    task={t}
                                    onDelete={() => deleteTask(t.id)}
                                />
                            ))
                        )}
                    </div>

                    {/* Add Button */}
                    <div className="p-4">
                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-md">
                            + Add task
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;