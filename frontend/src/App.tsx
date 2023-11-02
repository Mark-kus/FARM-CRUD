import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import TaskForm from './pages/TaskForm.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/new'
            element={<TaskForm />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
