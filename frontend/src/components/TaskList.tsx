import type { Task } from '../interfaces/task.interface'

function TaskList({ allTasks }: { allTasks: Task[] }) {
  return (
    <ul>
      {allTasks.map((task) => {
        return (
          <li
            key={task.title}
            className='bg-zinc-300 p-4 hover:cursor-pointer hover:bg-zinc-500 border border-zinc-400'>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
