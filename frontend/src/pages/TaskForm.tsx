import { FormEvent, useState, useEffect } from 'react'
import { createTask, fetchTaskByTitle } from '../services/tasks'
import type { Task } from '../interfaces/task.interface'
import { useParams } from 'react-router-dom'

const inputCls = 'border-2 block py-2 px-3 mb-4 w-full text-black'

function TaskForm() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { taskTitle } = useParams<string>()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (title === '' || description === '') {
      setError('No puede haber campos vacios')
    } else {
      setIsLoading(true)

      const taskObject: Task = { title, description, completed: false }

      try {
        await createTask(taskObject)
        setTitle('')
        setDescription('')
        if (error) setError('')
      } catch (err) {
        setError(err.detail)
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    if (taskTitle) {
      const getTaskData = async () => {
        setIsLoading(true)
        const task = await fetchTaskByTitle(taskTitle)
        setTitle(task.title)
        setDescription(task.description)
        setIsLoading(false)
      }
      getTaskData()
    }
  }, [taskTitle])

  return (
    <div className='flex justify-center items-center h-[calc(100vh-10rem)]'>
      <form
        onSubmit={handleSubmit}
        className='bg-zinc-300 p-10'>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          className={inputCls}
          disabled={isLoading}
          autoFocus
        />
        <textarea
          name='description'
          id='description'
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
          rows={10}
          className={inputCls}
          disabled={isLoading}></textarea>

        {error && <p className='text-rose-600 text-center mb-4'>{error}</p>}

        <div className='flex'>
          <a
            href='/'
            className='block text-center w-1/2 py-2 px-3 bg-white hover:bg-zinc-400'>
            Back
          </a>
          <button
            className={`w-1/2 py-2 px-3 bg-white hover:bg-zinc-400 ${isLoading ? 'text-zinc-400' : ''}`}
            disabled={isLoading}>
            {title ? 'Update' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
