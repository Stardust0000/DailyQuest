import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Taskform({addTask}) {
    // for task name 
    const[task, setTasks] = useState('');
    // for task priority
    const [priority, setPriority] = useState('medium');
    // for task category
    const [category, setCategory] = useState('general');
    // for due date
    const [dueDate, setDueDate] = useState("");
    // for due time
    const [dueTime, setDueTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //refresh prevent
        if(task.trim()) {
            // If task is not empty and
            // call the parent’s addTask to update the tasks state
            addTask({text: task,dueDate, dueTime, priority, category, completed: false});
            // reset the form:
            setTasks('');
            setDueDate('')
            setDueTime('')
            setPriority('medium')
            setCategory('general');
        }
    };

    return(
        <form onSubmit={handleSubmit} className="task-form">
            <div id="inp">
                <input type="text" 
                placeholder="Enter task" 
                value={task} 
                onChange={(e) => setTasks(e.target.value)}
                required/>
                <button type="submit">Add Task</button>
            </div>
        <div className="task-bar">    
            <div>
                <DatePicker
                selected={dueDate ? new Date(dueDate) : null}
                onChange={(date)=>setDueDate(date.toISOString().split("T")[0])}
                dateFormat="yyyy-MM-dd" placeholderText="Select date" className="styled"
                />
            </div>
            <div>
                <DatePicker
                selected={dueTime ? new Date(`${dueDate || "2000-01-01"}T${dueTime}`) : null}
                onChange = {(date)=>setDueTime(
                    date.toISOString().split("T")[1].slice(0,5) //gives HH:mm form
                )}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={10}
                timeCaption="Time"
                dateFormat="HH:mm"
                placeholderText="Select time"
                className="styled"
                />
            </div>
                 <div id="btns">
                    <select value={priority} 
                    onChange={(e)=>setPriority(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    </select>

                    <select value={category} 
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    </select>
                </div>
            </div>
        </form>
    )
}