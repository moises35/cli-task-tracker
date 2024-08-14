import { commander } from "../plugins/commander.plugin"


export class Server {
  static start() {
    console.log('Server started')
    const commanderOptions = {
      addTask: (task: string) => { return true },
      deleteTask: (id: number) => { return true },
      updateTask: (id: number, task: string) => { return true },
      markInProgressTask: (id: number) => { return true },
      markDoneTask: (id: number) => { return true },
      listTasks: (status?: string) => []
    }
    
    const result = commander(commanderOptions)

    console.log(result)
  }
}