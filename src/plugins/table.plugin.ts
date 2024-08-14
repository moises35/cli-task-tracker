import { table } from 'table';
import { Task } from '../domain/entities/task.entitie';

export const tableData = (data: Task[]) => {
  const header = ['ID', 'Task', 'Status', 'CreatedAt', 'UpdatedAt'];

  const emojiStatus = (status: string) => {
    if(status === 'todo') {
      return '🔴 ToDo';
    } else if(status === 'in-progress') {
      return '🟡 In progress';
    } else {
      return '🟢 Done';
    }
  }
  const rows = data.map((task) => [
    task.id.toString(), 
    task.task, 
    emojiStatus(task.status), 
    task.createdAt, 
    task.updatedAt
  ]);

  return table(
    [header, ...rows],
    {
      header: {
        content: 'Task Tracker',
      },
      drawHorizontalLine: (lineIndex, rowCount) => {
        return lineIndex === 0 || lineIndex === 2 || lineIndex === 1 || lineIndex === rowCount;
      }
    }
  );
};
