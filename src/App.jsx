
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import React, { useEffect, useState } from 'react';
import Dashboard from "./components/dashboard";

const App = () => {
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('')
  const [priority, setPriority] = useState("medium");
  const [editTask, setEditTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPriority, setEditPriority] = useState("medium");


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const addTask = () => {
    if (!input) return;

    const newTask = {
      id: Date.now(),
      title: input,
      status: 'todo',
      priority: priority,
      createdAt: new Date().toISOString()
    }
    setTask([...task, newTask])
    setInput('')
  }

  const deleteTask = (id) => {
    setTask(task.filter(t => t.id !== id));

  }
  const updateTaskStatus = ((id, newStatus) => {
    console.log(id, newStatus)
    const updateTasks = task.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          status: newStatus
        }
      }
      return ele;
    })
    setTask(updateTasks)
    console.log(updateTasks)
  })

  const handleEditClick = (task) => {
    setEditTask(task);
    setEditTitle(task.title);
    setEditPriority(task.priority);
  };

  const saveEditTask = () => {
    const updated = task.map((t) =>
      t.id === editTask.id
        ? { ...t, title: editTitle, priority: editPriority }
        : t
    );

    setTask(updated);
    setEditTask(null);
  };
  return (
    <div className="flex h-screen bg-[#f5f7fb]">
      <Sidebar></Sidebar>
      <div className="flex-1 flex flex-col">
        <Navbar
          input={input}
          setInput={setInput}
          addTask={addTask}
          priority={priority}
          setPriority={setPriority}
        />
        <Dashboard
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
          onEdit={handleEditClick}>
        </Dashboard>
        {editTask && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">

            <div className="bg-white p-6 rounded-xl w-80 space-y-4">

              <h2 className="text-lg font-semibold">Edit Task</h2>

              {/* Title */}
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full border p-2 rounded"
              />

              {/* Priority */}
              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>

              {/* Buttons */}
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setEditTask(null)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={saveEditTask}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
