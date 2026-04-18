
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


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const addTask = () => {
    if (!input) return;

    const newTask = {
      id: Date.now(),
      title: input,
      status: 'todo'
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
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <div className="flex-1 flex flex-col">
        <Navbar
          input={input}
          setInput={setInput}
          addTask={addTask}
        />
        <Dashboard
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}>
        </Dashboard>
      </div>
    </div>
  );
}

export default App;
