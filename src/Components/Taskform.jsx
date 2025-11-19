import {useState} from "react"

export default function Taskform({addTask}) {
    // for task name 
    const[task, setTasks] = useState('');
    // for task priority
    const [priority, setPriority] = useState('medium');
    // for task category
    const [category, setCategory] = useState('general');

    const handleSubmit = (e) => {
        e.preventDefault(); //refresh prevent
        if(task.trim()) {
            // If task is not empty and
            // call the parent’s addTask to update the tasks state
            addTask({text: task, priority, category, completed: false});
            // reset the form:
            setTasks('');
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
        </form>
    )
}