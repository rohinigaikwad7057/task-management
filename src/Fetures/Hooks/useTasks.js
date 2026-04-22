import { useEffect, useState } from "react";

const useTasks = () => {
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  const [priority, setPriority] = useState("medium");
const [searchFilter, setSearchFilter] = useState("");
const [filterPriority, setFilterPriority] = useState("all");

  const [editTask, setEditTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPriority, setEditPriority] = useState("medium");


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const addTask = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      title: input,
      status: "todo",
      priority,
      createdAt: new Date().toISOString(),
    };

    setTask((prev) => [...prev, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTask((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTaskStatus = (id, newStatus) => {
    setTask((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

const moveTask = (updatedTasksOrId, newStatus) => {
  // CASE 1: FULL ARRAY (reorder case)
  if (Array.isArray(updatedTasksOrId)) {
    setTask(updatedTasksOrId);
    return;
  }

  //  CASE 2: MOVE BETWEEN COLUMNS
  const updated = task.map((t) =>
    t.id === updatedTasksOrId
      ? { ...t, status: newStatus }
      : t
  );

  setTask(updated);
};


  const handleEditClick = (task) => {
    setEditTask(task);
    setEditTitle(task.title);
    setEditPriority(task.priority);
  };

  const saveEditTask = () => {
    setTask((prev) =>
      prev.map((t) =>
        t.id === editTask.id
          ? { ...t, title: editTitle, priority: editPriority }
          : t
      )
    );
    setEditTask(null);
  };

  return {
    task,
    input,
    setInput,
    priority,
    setPriority,
    addTask,
    deleteTask,
    updateTaskStatus,
    editTask,
    editTitle,
    setEditTitle,
    editPriority,
    setEditPriority,
    handleEditClick,
    saveEditTask,
    setEditTask,
    moveTask,
    searchFilter,
    setSearchFilter,
    filterPriority,
    setFilterPriority,

  };
};

export default useTasks;