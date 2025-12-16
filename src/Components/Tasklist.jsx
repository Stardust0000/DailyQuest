export default function Tasklist({tasks, updateTask, deleteTask}) {
    
    const toggleComplete = (index) => {
        const updatedTask = {
            ...tasks[index], 
            completed : !tasks[index].completed };
        updateTask(updatedTask, index);
    };

    // Convert date + time to readable format
    function formatDateTime(dateStr, timeStr) {
        if (!dateStr || !timeStr) return "";
        const date = new Date(`${dateStr}T${timeStr}`);
        return date.toLocaleString("en-IN", {
            weekday: "short",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    // Check if overdue
    function isOverdue(dateStr, timeStr) {
        if (!dateStr || !timeStr) return false;
            const due = new Date(`${dateStr}T${timeStr}`);
        return due < new Date();
    }

    // Check if due within 1 hour
    function isDueSoon(dateStr, timeStr) {
        if (!dateStr || !timeStr) return false;
            const now = new Date();
            const due = new Date(`${dateStr}T${timeStr}`);
            const diffMs = due - now;
            const diffHours = diffMs / (1000 * 60 * 60);
        return diffHours > 0 && diffHours <= 1;
    }


    return(
        <ul className="task-list">
            {tasks.map((task,index)=> {
                const overdue = isOverdue(task.dueDate, task.dueTime);
                const dueSoon = isDueSoon(task.dueDate, task.dueTime);
                let statusMessage = "";
                if (overdue) {
                    statusMessage = "This task is overdue!";
                } else if (dueSoon) {
                    statusMessage = "Due soon hurry!";
                } else if (task.dueDate && task.dueTime) {
                    statusMessage = "Complete before deadline!";
                }
                return (
                <li key={index} className={task.completed ? "completed" : ""}>
                    <div>
                    <span>
                        {task.text}
                        <small>({task.priority}, {task.category})</small>
                        {task.dueDate && task.dueTime && (
                            <>
                            <p className={
                                overdue ? "due-info overdue":
                                dueSoon ? "due-info due-soon":
                                "due-info"
                            }>
                                Due: {formatDateTime(task.dueDate, task.dueTime)}
                            </p>
                            <p className={
                                    overdue ? "status-text overdue" : dueSoon ? "status-text due-soon"  : "status-text"
                                }>
                                    {statusMessage}
                            </p>
                            </>
                        )}
                    </span>
                    </div>
                    <div>
                        <button onClick={() => toggleComplete(index)}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                        <button onClick={() => deleteTask(index)}> Delete</button>
                    </div>
                </li>
            )}
            )}
        </ul>
    )
}