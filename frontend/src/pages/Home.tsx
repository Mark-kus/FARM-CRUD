import { useEffect, useState } from 'react'
import { fetchTasks } from '../services/tasks'
import TaskList from '../components/TaskList'

import type { Task } from '../interfaces/task.interface'

function Home() {
  const [allTasks, setAllTasks] = useState<Task[]>([])

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await fetchTasks()
      if (data.length) setAllTasks(data)
    }
    getTasks()
  }, [])

  return (
    <>
      <header className='flex justify-between items-center'>
        <h1 className='p-2 text-3xl font-bold'>Homepage</h1>
        <a
          href='/tasks/new'
          className='p-2 text-3xl hover:bg-zinc-200'>
          New
        </a>
      </header>
      <TaskList allTasks={allTasks} />
    </>
  )
}

export default Home
