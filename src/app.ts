#!/usr/bin/env node

import { JsonDatasourceImpl } from "./infrastructure/datasources/json.datasource.impl.js"
import { TaskRepositoryImpl } from "./infrastructure/repositories/task.repository.impl.js"
import { Server } from "./presentation/server.js"

(async () => {
  main()
})()

async function main() {
  const jsonData = new TaskRepositoryImpl(
    new JsonDatasourceImpl()
  )

  new Server(jsonData).start()
}

