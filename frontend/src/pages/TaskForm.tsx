import { FormEvent, useState } from 'react'
import { createTask } from '../services/tasks'
import type { Task } from '../interfaces/task.interface'

const inputCls = 'border-2 block py-2 px-3 mb-4 w-full text-black'

function TaskForm() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const taskObject: Task = { title, description, completed: false }
    createTask(taskObject)
  }

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
        />
        <textarea
          name='description'
          id='description'
          value={description}
          onChange={({ target: { value } }) => setDescription(value)}
          rows={10}
          className={inputCls}></textarea>
        <button className='w-full py-2 px-3 bg-white'>Save</button>
      </form>
    </div>
  )
}

export default TaskForm
