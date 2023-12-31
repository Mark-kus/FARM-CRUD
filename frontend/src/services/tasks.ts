import { AllTasks, Task, UpdateTask } from '../interfaces/task.interface'

const BACKEND_URL = 'http://localhost:8000'

export const createTask = async (task: Task): Promise<Task> => {
  const response = await fetch(`${BACKEND_URL}/tasks/`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-type': 'application/json'
    }
  })
  return await response.json()
}

export const fetchTasks = async (): Promise<AllTasks> => {
  const response = await fetch(`${BACKEND_URL}/tasks/`, {
    method: 'GET'
  })
  return await response.json()
}

export const fetchTaskByTitle = async (title: string): Promise<Task> => {
  const response = await fetch(`${BACKEND_URL}/tasks/${title}`, {
    method: 'GET'
  })
  return await response.json()
}

export const updateTask = async (task: UpdateTask): Promise<Task> => {
  const response = await fetch(`${BACKEND_URL}/tasks/${task.title}`, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-type': 'application/json'
    }
  })
  return await response.json()
}

export const deleteTask = async (title: string): Promise<Task> => {
  const response = await fetch(`${BACKEND_URL}/tasks/${title}`, {
    method: 'DELETE'
  })
  return await response.json()
}
