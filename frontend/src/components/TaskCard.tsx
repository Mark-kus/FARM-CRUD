import { useNavigate } from 'react-router-dom'
import type { Task } from '../interfaces/task.interface'

function TaskCard({ task }: { task: Task }) {
  const navigate = useNavigate()
  return (
    <li
      key={task.title}
      className='bg-zinc-300 p-4 hover:cursor-pointer hover:bg-zinc-500 border border-zinc-400'
      onClick={() => navigate(`tasks/${task.title}`)}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </li>
  )
}

export default TaskCard
