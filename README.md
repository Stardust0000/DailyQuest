# ✨ Daily Quest – React To-Do App

A simple and interactive task-tracking application built using **React + Vite**, featuring task creation, priority/category tagging, a progress tracker, and automatic saving through **localStorage**.

This app helps you manage daily tasks like missions — Level Up every day! ⚔️✨

---

## 🚀 Features

### ➕ Add Tasks  
- Input task name  
- Select priority: High / Medium / Low  
- Select category: Work / Personal / General  

### ✏️ Update Tasks  
- Mark tasks as **Complete / Undo**  
- UI updates instantly using React state

### 🗑 Delete Tasks  
- Delete individual tasks  
- Clear all tasks at once  

### 🔄 Persistent Data  
- Tasks are stored in **localStorage**  
- Reloaded automatically when the app restarts

### 📊 Progress Tracker  
- Displays completed tasks vs total tasks  
- Animated progress bar showing percentage completion

---

## 🛠 Tech Stack

- **React (Vite)**
- **JavaScript ES6**
- **CSS3**
- **LocalStorage**

---

## 📂 Project Structure

```
src/
│
├── Components/
│   ├── Taskform.jsx
│   ├── Tasklist.jsx
│   └── Progresstracker.jsx
│
├── App.jsx
├── main.jsx
└── style.css
```

---

## 🧠 How It Works

### 1. State Management
All tasks are stored in:
```js
const [tasks, setTasks] = useState([]);
```

### 2. Loading Tasks on Startup
```js
useEffect(() => {
  const saved = localStorage.getItem("tasks");
  if (saved) setTasks(JSON.parse(saved));
}, []);
```

### 3. Saving Tasks on Change
```js
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```

### 4. Add Task
`Taskform` sends:
```js
{text, priority, category, completed: false}
```
to `App`, which adds it to the list.

### 5. Update Task
Used for toggling completion or modifying a task.

### 6. Delete Task
Removes a task by index.

### 7. Progress Tracker
Calculates:
- number of completed tasks  
- total tasks  
- percentage completed  

and updates the progress bar.

---

## 🏃‍♀️ How to Run

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

---

## 📸 Screenshots


---

## 📜 License
This project is open-source and free to use.

