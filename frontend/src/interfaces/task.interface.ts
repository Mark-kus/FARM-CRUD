export interface Task {
  title: string
  description: string
  completed: boolean
}

export interface UpdateTask {
  title: string
  description?: string
  completed?: boolean
}

export interface AllTasks {
  data: Task[]
}