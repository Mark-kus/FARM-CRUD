import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import type { Task } from '../interfaces/task.interface'
import { deleteTask } from '../services/tasks'

interface Props {
  task: Task
  setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>
  shouldFetch: boolean
}

function TaskCard({ task, setShouldFetch, shouldFetch }: Props) {
  const [confirmation, setConfirmation] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleClick = async (title: string) => {
    if (confirmation) {
      setIsLoading(true)
      await deleteTask(title)
      setShouldFetch(!shouldFetch)
      setIsLoading(false)
    } else {
      setConfirmation(true)
    }
  }

  return (
    <li className='flex justify-between items-center border border-zinc-400 '>
      <div
        className='p-4 w-full bg-zinc-300 hover:cursor-pointer hover:bg-zinc-400'
        onClick={() => navigate(`tasks/${task.title}`)}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <button
        disabled={isLoading}
        onBlur={() => setConfirmation(false)}
        onClick={() => handleClick(task.title)}
        className='h-full w-1/6 bg-zinc-300 hover:cursor-pointer hover:bg-zinc-400'>
        {confirmation ? '❌' : '🛑'}
      </button>
    </li>
  )
}

export default TaskCard
