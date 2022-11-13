import React, { useState } from "react";
import { VscChecklist, VscAdd, VscClose } from "react-icons/vsc";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTasks([...tasks, addTask]);
    setInput("");
  };

  
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filteredTasks);
    console.log("Task cleared.");
  };

  
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((tasks) =>
        tasks.id === id ? { ...tasks, completed: !tasks.completed } : tasks
      )
    );
  };

  const date = new Date();
  // console.log(date)
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="App">
      <div className="container">
        <h1>
          <VscChecklist /> To Do List
        </h1>

        <div className="date">
          <p>
            {days[date.getDay()]}, {months[date.getMonth()]} {date.getDate()},{" "}
            {date.getFullYear()}{" "}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <VscAdd className="icon" />
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Enter a task"
              type="text"
            />
          </div>
        </form>

        <div>
          {tasks.map((tasks) => (
            <div
              className={`task-row ${tasks.completed ? "Completed" : ""}`}
              key={tasks.id}
              onDoubleClick={() => toggleComplete(tasks.id)}
            >
              <p>{tasks.text} </p>
              <VscClose onClick={() => deleteTask(tasks.id)} className="icon" />
            </div>
          ))}
        </div>

        <p className="length">
          {tasks < 1 ? "No tasks, go have a break!" : ` Number of Tasks: ${tasks.length}`}
        </p>
      </div>
    </div>
  );
}

export default App;
