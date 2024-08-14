import { TaskDatasource } from "../../domain/datasource/task.datasource";
import { Task, TaskResponse, TaskStatus } from "../../domain/entities/task.entitie";
import { TaskRepository } from "../../domain/repository/task.repository";

export class TaskRepositoryImpl implements TaskRepository {
  constructor(
    private readonly taskDatasource: TaskDatasource
  ){}

  async addTask(task: string): Promise<TaskResponse> {
    return this.taskDatasource.addTask(task)
  }

  async deleteTask(id: number): Promise<TaskResponse> {
    return this.taskDatasource.deleteTask(id)
  }

  async updateTask(id: number, task: string): Promise<TaskResponse> {
    return this.taskDatasource.updateTask(id, task)
  }

  async markInProgressTask(id: number): Promise<TaskResponse> {
    return this.taskDatasource.markInProgressTask(id)
  }

  async markDoneTask(id: number): Promise<TaskResponse> {
    return this.taskDatasource.markDoneTask(id)
  }

  async listTasks(status?: TaskStatus): Promise<Task[]> {
    return this.taskDatasource.listTasks(status)
  }
}