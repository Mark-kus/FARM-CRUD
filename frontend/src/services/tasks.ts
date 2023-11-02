import { AllTasks, Task } from '../interfaces/task.interface'

const BACKEND_URL = 'http://localhost:8000'

export const createTask = (task: Task): void => {
  fetch(`${BACKEND_URL}/tasks/`, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json"
    }
  })
}

export const fetchTasks = async (): Promise<AllTasks> => {
  const response = await fetch(`${BACKEND_URL}/tasks/`, {
    method: 'GET'
  })
  return await response.json()
}
