import { Task, TaskResponse, TaskStatus } from "../entities/task.entitie";

export abstract class TaskDatasource {
  abstract addTask(task: string): Promise<TaskResponse>;
  abstract deleteTask(id: number): Promise<TaskResponse>;
  abstract updateTask(id: number, task: string): Promise<TaskResponse>;
  abstract markInProgressTask(id: number): Promise<TaskResponse>;
  abstract markDoneTask(id: number): Promise<TaskResponse>;
  abstract listTasks(status?: TaskStatus): Promise<Task[]>;
}