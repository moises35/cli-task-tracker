import { program } from 'commander';
import { TaskStatus } from '../domain/entities/task.entitie';
import { TaskRepositoryImpl } from '../infrastructure/repositories/task.repository.impl';
import { tableData } from './table.plugin';

export function commander(commanderOption: TaskRepositoryImpl) {
  program
    .name('task-cli')
    .description('Task tracker CLI')
    .version('0.0.1');

  // Add command
  program.command('add <task>')
    .description('Add a new task')
    .action(async (task) => {
      const result = await commanderOption.addTask(task)

      console.log(result.message)
    }).addHelpText('after', `Example:
      $ task-cli add "Buy milk"
      $ task-cli add "Buy milk and eggs"`
    )
    .addHelpText('after', 'Note: Task must be a string');
      
  // Update command
  program.command('update <id> <task>')
    .description('Update a task')
    .action(async (id, task) => {
      id = parseInt(id);

      if(typeof id !== 'number') {
        throw new Error('<id> must be a number')
      }

      const result = await commanderOption.updateTask(id, task)

      console.log(result.message)
      console.log(result?.data)
    })
    .addHelpText('after', `Example:
      $ task-cli update 1 "Buy cookies"
      $ task-cli update 1 "Learn nodejs"`
    )
    .addHelpText('after', 'Note: <task> must be a string and <id> must be a number');

  // Delete command
  program.command('delete <id>')
    .description('Delete a task')
    .action(async (id) => {
      id = parseInt(id);

      if(typeof id !== 'number') {
        throw new Error('<id> must be a number')
      }

      const result = await commanderOption.deleteTask(id)

      console.log(result.message)
    })
    .addHelpText('after', `Example:
      $ task-cli delete 1
      $ task-cli delete 2`
    )
    .addHelpText('after', 'Note: <id> must be a number');

  // Mark as in progress command
  program.command('mark-in-progress <id>')
    .description('Mark a task as in progress')
    .action(async (id) => {
      id = parseInt(id);

      if(typeof id !== 'number') {
        throw new Error('<id> must be a number')
      }

      const result = await commanderOption.markInProgressTask(id)

      console.log(result.message)
    })

  // 
  program.command('mark-done <id>')
    .description('Mark a task as done')
    .action(async (id) => {
      id = parseInt(id);

      if(typeof id !== 'number') {
        throw new Error('<id> must be a number')
      }

      const result = await commanderOption.markDoneTask(id)

      console.log(result.message)
    });

  // List command
  program.command('list [status]')
    .description('List tasks by status. Status can be: done | todo | in-progress | none')
    .action(async (status: string) => {
      if(status === TaskStatus.done || status === TaskStatus.inProgress || status === TaskStatus.todo) {
        const tasks = await commanderOption.listTasks(status);
        console.log(tableData(tasks));
      } else if(status === undefined || status === '') {
        const tasks = await commanderOption.listTasks();
        console.log(tableData(tasks));
      } else {
        console.log('Invalid status');
      }
    });

  program.parse(process.argv);

  return program.opts();
}
