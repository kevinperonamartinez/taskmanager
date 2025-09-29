import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "" && date !== "") {
      addTask(text, date);
      setText("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Añadir nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginBottom: "15px" }}
      />
    </form>
  );
};

export default TaskForm;
