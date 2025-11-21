import Taskform from "../Components/Taskform";
import Tasklist from "../Components/Tasklist";
import Progresstracker from "../Components/Progresstracker";
import { useEffect, useState } from "react";

import "../style.css";

export default function Todo(){

  // state variable: tasks
  // initally tasks is an empty array 
  // setTasks updates 
  const[tasks, setTasks] = useState([]);

  // loads tasks from local storage at startup -> []
  // this runs once at startup
  useEffect(() => {
  const saved = localStorage.getItem("tasks");
    if (saved) 
    {
    setTasks(JSON.parse(saved));
    }
  }, []);

  // save tasks whenever they change
  useEffect(() => {
    localStorage.setItem 
    ("tasks", JSON.stringify(tasks))
  }, [tasks]); // run this effect whenever the tasks changes

  const addTask = (task) => {
    setTasks([...tasks,task]) // [...tasks] => creats a copy of existing tasks array bcz Reat state must NOT be modified directly
  } 
 
  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask); 
  }
 
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
    // - -> the task item (unused)
    // i -> the index of that task
    // i !== index -> if index matches the one delete it unless keep
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return(
    <div className="App system-window">
      <header>
      <h1 className="title">Daily Quest</h1>
      <p className="tagline">Level Up!</p>
      </header>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask} 
      deleteTask = {deleteTask} />
      <Progresstracker tasks = {tasks}/>
      {tasks.length > 0 
          && 
        (
          <button onClick={clearTasks}     
          className="clear-btn">
          Clear all tasks
          </button>
        )
      }
    </div>
  )
}