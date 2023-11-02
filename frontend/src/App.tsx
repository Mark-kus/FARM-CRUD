import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import TaskForm from './pages/TaskForm.tsx'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='container mx-auto px-10 text-white'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/tasks/new'
              element={<TaskForm />}
            />
            <Route
              path='/tasks/:taskTitle'
              element={<TaskForm />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
