import type { Task } from '../interfaces/task.interface'
import { useEffect, useState } from 'react'
import { fetchTasks } from '../services/tasks'
import TaskCard from './TaskCard'

function TaskList() {
  const [allTasks, setAllTasks] = useState<Task[]>([])
  const [shouldFetch, setShouldFetch] = useState<boolean>(false)

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await fetchTasks()
      setAllTasks(data)
    }
    getTasks()
  }, [shouldFetch])

  return (
    <ul className='grid grid-cols-3 gap-2'>
      {allTasks.map((task, i) => (
        <TaskCard
          key={i}
          shouldFetch={shouldFetch}
          setShouldFetch={setShouldFetch}
          task={task}
        />
      ))}
    </ul>
  )
}

export default TaskList
