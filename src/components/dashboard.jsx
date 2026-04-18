import React from 'react';

const Dashboard = ({ task, updateTaskStatus, deleteTask }) => {
    return (
        <div className="p-5 bg-gray-100 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">

                {/* To Do */}
                <div className=" w-full lg:w-78 bg-white p-4 rounded shadow flex flex-col">
                    <h2 className="font-bold mb-3">To Do</h2>
                    <div className="rounded p-3 space-y-3 overflow-y-auto">
                        {task.filter((t) => t.status === 'todo')

                            .map((t) => (
                                <div key={t.id} className="bg-gray-100 p-2 rounded mb-2 flex justify-between items-start gap-2">
                                    <div className="flex-1 wrap-break-word break-all">
                                        {t.title}
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <button
                                            onClick={() => updateTaskStatus(t.id, "progress")}
                                            className="bg-gray-100 text-gray-500 text-sm whitespace-nowrap"
                                        >
                                            Start
                                        </button>
                                        <button
                                            onClick={() => deleteTask(t.id, "progress")}
                                            className="bg-gray-100 text-red-500 text-sm whitespace-nowrap active:hover"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* In Progress */}
                <div className=" w-full lg:w-78 bg-white p-4 rounded shadow flex flex-col">
                    <h2 className="font-bold mb-3">In Progress</h2>
                    <div className="rounded p-3 space-y-3 overflow-y-auto">
                        {task.filter((t) => t.status === 'progress')
                            .map((t) => (
                                <div key={t.id} className="bg-gray-100 p-2 rounded mb-2 flex justify-between">
                                    {t.title}
                                    <button
                                        onClick={() => updateTaskStatus(t.id, "completed")}
                                        className="text-blue-500 text-sm whitespace-nowrap"
                                    >
                                        Complete
                                    </button>
                                </div>
                            ))}

                    </div>
                </div>

                {/* Completed */}
                <div className=" w-full lg:w-78 bg-white p-4 rounded shadow flex flex-col">
                    <h2 className="font-bold mb-3">Completed</h2>
                    <div className="rounded p-3 space-y-3 overflow-y-auto">
                        {task.filter((ele) => ele.status === 'completed')
                            .map((ele) => (
                                <div key={ele.id} className="bg-gray-100 p-2 rounded mb-2 flex justify-between">
                                    {ele.title}
                                    <span className="text-green-500 font-bold" onClick={() => updateTaskStatus(ele.id, 'done')}>Done</span>
                                    {/* <button
                                                onClick={() => updateTaskStatus(ele.id, 'done')}
                                                className="text-green-500 text-sm">
                                                Done
                                            </button> */}
                                </div>
                            ))}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;
