import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='flex justify-between items-center my-7'>
      <Link to='/'>
        <h1 className='text-3xl font-bold'>App de Tareas</h1>
      </Link>

      <Link to='/tasks/new'>Crear nuevo</Link>
    </header>
  )
}

export default Navbar
