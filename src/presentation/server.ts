import { commander } from "../plugins/commander.plugin"
import { TaskRepositoryImpl } from "../infrastructure/repositories/task.repository.impl"

export class Server {
  constructor(
    private readonly taskRepository: TaskRepositoryImpl
  ){}

  public async start() {
    commander(this.taskRepository)
  }
}