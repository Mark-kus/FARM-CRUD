import { Task } from '../interfaces/task.interface'

export const createTask = (task: Task): void => {
  fetch('http://localhost:8000/tasks/', {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      "Content-type": "application/json"
    }
  })
}
