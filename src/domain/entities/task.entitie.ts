// El status tiene que ser un enum con los siguientes valores: 'todo', 'in-progress', 'done'
export enum TaskStatus {
  todo = 'todo',
  inProgress = 'in-progress',
  done = 'done'
}


export type Task = {
  id: number;
  task: string;
  status: TaskStatus;
  createdAt: string,
  updatedAt: string,
}

export type TaskResponse = {
  success: boolean;
  message: string;
  data?: Task;
}