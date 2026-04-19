// import React from "react";
// import { useDroppable } from "@dnd-kit/core";
// import TaskCard from "./taskCard";

// const TaskColumn = ({
//   id,
//   title,
//   tasks,
//   actionText,
//   actionStatus,
//   updateTaskStatus,
//   deleteTask,
// }) => {

//   // ✅ Make column droppable
//   const { setNodeRef } = useDroppable({
//     id: id,
//   });

//   return (
//     <div ref={setNodeRef} className="bg-white p-4 rounded shadow flex flex-col">
      
//       <h2 className="font-bold mb-3">
//         {title} ({tasks.length})
//       </h2>

//       <div className="space-y-3">

//         {tasks.length === 0 && (
//           <p className="text-gray-400 text-sm">No tasks</p>
//         )}

//         {tasks.map((t) => (
//           <TaskCard
//             key={t.id}
//             task={t}
//             actionText={actionText}
//             actionStatus={actionStatus}
//             updateTaskStatus={updateTaskStatus}
//             deleteTask={deleteTask}
//           />
//         ))}

//       </div>
//     </div>
//   );
// };

// export default TaskColumn;