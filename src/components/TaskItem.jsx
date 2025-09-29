import React from "react";

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    return `${d.getDate().toString().padStart(2,"0")}/${(d.getMonth()+1).toString().padStart(2,"0")}/${d.getFullYear()}`;
  };

  const getBorderColor = (isoDate) => {
    const today = new Date();
    const taskDate = new Date(isoDate);
    today.setHours(0,0,0,0);
    taskDate.setHours(0,0,0,0);

    if (taskDate < today) return "#f28b82"; // rojo para vencidas
    if (taskDate.getTime() === today.getTime()) return "#81c995"; // verde para hoy
    return "#c4e1c1"; // matcha para futuras
  };

  return (
    <div 
      className="task-card" 
      style={{ border: `2px solid ${getBorderColor(task.date)}`, animation: "fadeIn 0.3s" }}
    >
      <div onClick={() => toggleTask(task.id)} style={{ cursor: "pointer" }}>
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
        <br />
        <small>{formatDate(task.date)}</small>
      </div>
      <button onClick={() => deleteTask(task.id)}>Borrar</button>
    </div>
  );
};

export default TaskItem;
