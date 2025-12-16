export default function Progresstracker({tasks}) {
    
    // tasks.filter() => goes through each tasks
    // it keeps only tasks where t.completed is true
    // and using .length counts how many are completed
    // completed = number of finished tasks.
    const completed = tasks.filter((t) => t.completed).length;
    const totaltasks = tasks.length;
    const percentage = totaltasks === 0 ? 0: (completed/totaltasks) * 100;
    
    return(
        <div>
           <p>
            {completed} of {totaltasks} tasks completed
           </p>
           <div className="progress-bar">
            <div className="progress" 
            style={{ width: `${percentage}%` }}>
            </div>
           </div>
        </div>
    );
}