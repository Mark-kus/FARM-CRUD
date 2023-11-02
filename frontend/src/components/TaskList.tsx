import type { Task } from '../interfaces/task.interface'
import TaskCard from './TaskCard'

function TaskList({ allTasks }: { allTasks: Task[] }) {
  return (
    <ul className='grid grid-cols-3 gap-2 m-2'>
      {allTasks.map((task) => (
        <TaskCard task={task} />
      ))}
    </ul>
  )
}

export default TaskList
