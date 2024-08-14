import { JsonDatasourceImpl } from "./infrastructure/datasources/json.datasource.impl"
import { TaskRepositoryImpl } from "./infrastructure/repositories/task.repository.impl"
import { Server } from "./presentation/server"

(async () => {
  main()
})()

async function main() {
  const jsonData = new TaskRepositoryImpl(
    new JsonDatasourceImpl()
  )

  new Server(jsonData).start()

  // Server.start()
}

