import { program } from 'commander';
import { Task } from '../types';

type CommanderOptions = {
  addTask: (task: string) => boolean;
  deleteTask: (id: number) => boolean;
  updateTask: (id: number, task: string) => boolean;
  markInProgressTask: (id: number) => boolean;
  markDoneTask: (id: number) => boolean;
  listTasks: (status?: string) => Task[];
}

export function commander(commanderOption: CommanderOptions) {
  program
    .name('task-cli')
    .description('Task tracker CLI')
    .version('0.0.1');

  program.command('add <task>')
    .description('Add a new task')
    .action((task) => {
      if (typeof task !== 'string') {
        throw new Error('Task must be a string');
      }

      commanderOption.addTask(task)
    }).addHelpText('after', `Example:
      $ task-cli add "Buy milk"
      $ task-cli add "Buy milk and eggs"`
    )
    .addHelpText('after', 'Note: Task must be a string')
      
    // .showHelpAfterError('')
    ;
  
  program.command('update <id> <task>')
    .description('Update a task')
    .action((id, task) => {
      console.log('Task updated successfully', id, task);
    });

  program.command('delete <id>')
    .description('Delete a task')
    .action((id) => {
      console.log('Task deleted successfully', id);
    });

  program.command('mark-in-progress <id>')
    .description('Mark a task as in progress')
    .action((id) => {
      console.log('Task marked as in progress', id);
    });

  program.command('mark-done <id>')
    .description('Mark a task as done')
    .action((id) => {
      console.log('Task marked as done', id);
    });

  program.command('list <status>')
    .description('List tasks by status. Status can be: done | todo | in-progress | none')
    .action(() => {
      console.log('Tasks list by ');
    });


  
  program.parse(process.argv);

  // console.log(program)
  return program.opts();
}
