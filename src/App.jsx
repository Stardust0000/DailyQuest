import { Route, Routes } from 'react-router-dom'

import Landing from './pages/Landing';
import Todo from './pages/Todo';
import Exit from './pages/Exit';

export default function App(){
  return(
    <div>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path = "/todo" element={<Todo />} />
      <Route path = "/exit" element={<Exit />} />
      </Routes>
    </div>
  )
}