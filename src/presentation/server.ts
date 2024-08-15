import { TaskRepositoryImpl } from "./../infrastructure/repositories/task.repository.impl.js"
import { commander } from "./../plugins/commander.plugin.js"

export class Server {
  constructor(
    private readonly taskRepository: TaskRepositoryImpl
  ){}

  public async start() {
    commander(this.taskRepository)
  }
}