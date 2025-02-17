import { useState } from "react";
import "./Todo.css"; // Import CSS

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (input.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editingIndex ? input : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, input]);
      }
      setInput("");
    }
  };

  const editTask = (index) => {
    setInput(tasks[index]);
    setEditingIndex(index);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          className="todo-input"
        />
        <button onClick={addTask} className="todo-button">
          {editingIndex !== null ? "Update" : "Add Task"}
        </button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span className="task-text">{task}</span>
            <div className="button-group">
              <button onClick={() => editTask(index)} className="edit-button">
                Edit
              </button>
              <button onClick={() => deleteTask(index)} className="delete-button">
                Complete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;