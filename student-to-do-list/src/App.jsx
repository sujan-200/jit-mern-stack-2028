import "./App.css";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import {Routes, Route} from "react-router-dom"
import Task from "./components/Task";
import TaskDetails from "./components/TaskDetails";
import { useState,useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/api/tasks")
    .then((response)=>response.json())
    .then((data)=>{
      setTasks(data)
    })
  },[]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard tasks={tasks} setTasks={setTasks} />} />
        <Route path="/tasks" element={<Task tasks={tasks} />} />
        <Route path="/tasks/:taskId" element={<TaskDetails tasks={tasks} />} />
      </Routes>
    </>
  );
}

export default App;