import Taskform from "./Components/Taskform";
import Tasklist from "./Components/Tasklist";
import Progresstracker from "./Components/Progresstracker";


function App(){
  return(
    <div>
      <h1>Daily Quest</h1>
      <p>Level Up!</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear All</button>
    </div>
  )
}
export default App;