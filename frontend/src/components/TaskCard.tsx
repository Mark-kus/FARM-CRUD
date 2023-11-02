import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import type { Task } from '../interfaces/task.interface'
import { deleteTask, updateTask } from '../services/tasks'

interface Props {
  task: Task
  setShouldFetch: React.Dispatch<React.SetStateAction<boolean>>
  shouldFetch: boolean
}

function TaskCard({ task, setShouldFetch, shouldFetch }: Props) {
  const [confirmation, setConfirmation] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleDelete = async () => {
    if (confirmation) {
      setIsLoading(true)
      await deleteTask(task.title)
      setShouldFetch(!shouldFetch)
      setIsLoading(false)
    } else {
      setConfirmation(true)
    }
  }

  const handleCheck = async () => {
    const updateObject = { title: task.title, completed: !task.completed }
    setIsLoading(true)
    await updateTask(updateObject)
    setShouldFetch(!shouldFetch)
    setIsLoading(false)
  }

  return (
    <li className='flex justify-between items-center border border-zinc-300 '>
      <div
        className='p-4 w-full bg-zinc-800 hover:cursor-pointer hover:bg-zinc-700'
        onClick={() => navigate(`tasks/${task.title}`)}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div className='h-full w-1/6'>
        <button
          disabled={isLoading}
          onBlur={() => setConfirmation(false)}
          onClick={handleDelete}
          className='h-1/2 w-full bg-zinc-800 hover:cursor-pointer hover:bg-zinc-700'>
          {confirmation ? '❌' : '🛑'}
        </button>
        <button
          onClick={handleCheck}
          className='h-1/2 w-full bg-zinc-800 hover:cursor-pointer hover:bg-zinc-700'>
          {task.completed ? '➖' : '✅'}
        </button>
      </div>
    </li>
  )
}

export default TaskCard
