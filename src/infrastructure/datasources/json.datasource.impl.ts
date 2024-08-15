import fs from 'fs';
import { TaskDatasource } from './../../domain/datasource/task.datasource.js';
import { Task, TaskResponse, TaskStatus } from './../../domain/entities/task.entitie.js';

export class JsonDatasourceImpl implements TaskDatasource {
  private readonly dataFolderPath = 'data/';
  private readonly dataFilePath    = 'data/db.json';

  constructor() {
    this.createLogsFiles();
  }

  async addTask(task: string): Promise<TaskResponse> {
    try {
      const tasks = this.getJsonContent(this.dataFilePath)
      let id = tasks.length + 1;

      while(true) {
        if(tasks.some(task => task.id === id)) {
          id++;
        } else {
          break;
        }
      }

      const newTask: Task = {
        id: id,
        task,
        status: TaskStatus.todo,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
      } 

      tasks.push(newTask);

      fs.writeFileSync(this.dataFilePath, JSON.stringify(tasks, null, 2));

      return {
        data: newTask,
        message: 'Task added successfully',
        success: true
      };
    } catch (error) {
      return {
        message: 'Error adding task',
        success: false
      };
    }
  }

  async deleteTask(id: number): Promise<TaskResponse> {
    try {
      const tasks = this.getJsonContent(this.dataFilePath);
      const taskIndex = tasks.findIndex(task => task.id === id);

      if(taskIndex === -1) {
        {
          return {
            message: `Task with ID ${id} not found`,
            success: false
          };
        }
      }

      tasks.splice(taskIndex, 1);

      fs.writeFileSync(this.dataFilePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
      return {
        message: 'Error deleting task',
        success: false
      };
    }

    return {
      message: 'Task deleted successfully',
      success: true
    };
  }

  async updateTask(id: number, task: string): Promise<TaskResponse> {
    try {
      const tasks = this.getJsonContent(this.dataFilePath);
      const taskIndex = tasks.findIndex(task => task.id === id);

      if(taskIndex === -1) {
        return {
          message: `Task with ID ${id} not found`,
          success: false
        }
      }

      tasks[taskIndex].task = task;
      tasks[taskIndex].updatedAt = new Date().toLocaleString();

      fs.writeFileSync(this.dataFilePath, JSON.stringify(tasks, null, 2));

      return {
        data: tasks[taskIndex],
        message: 'Task updated successfully',
        success: true
      };
    } catch (error) {
      return {
        message: 'Error updating task',
        success: false
      };
    }
  }

  async markInProgressTask(id: number): Promise<TaskResponse> {
    try {
      const tasks = this.getJsonContent(this.dataFilePath);
      const taskIndex = tasks.findIndex(task => task.id === id);

      if(taskIndex === -1) {
        return {
          message: `Task with ID ${id} not found`,
          success: false
        };
      }

      tasks[taskIndex].status = TaskStatus.inProgress;
      tasks[taskIndex].updatedAt = new Date().toLocaleString();

      fs.writeFileSync(this.dataFilePath, JSON.stringify(tasks, null, 2));

    } catch (error) {
      return {
        message: 'Error marking task as in progress',
        success: false
      };
    }

    return {
      message: '🟡 Task marked as in progress',
      success: true
    }
  }

  async markDoneTask(id: number): Promise<TaskResponse> {
    try {
      const tasks = this.getJsonContent(this.dataFilePath);
      const taskIndex = tasks.findIndex(task => task.id === id);

      if(taskIndex === -1) {
        return {
          message: `Task with ID ${id} not found`,
          success: false
        }
      }

      tasks[taskIndex].status = TaskStatus.done;
      tasks[taskIndex].updatedAt = new Date().toLocaleString();

      fs.writeFileSync(this.dataFilePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
      return {
        message: 'Error marking task as done',
        success: false
      };
    }

    return {
      message: '🟢 Task marked as done',
      success: true
    };
  }

  async listTasks(status?: TaskStatus): Promise<Task[]> {
    if(status === TaskStatus.done) {
      const tasks = this.getJsonContent(this.dataFilePath);

      return tasks.filter(task => task.status === TaskStatus.done);
    } else if(status === TaskStatus.todo) {
      const tasks = this.getJsonContent(this.dataFilePath);

      return tasks.filter(task => task.status === TaskStatus.todo);
    } else if(status === TaskStatus.inProgress) {
      const tasks = this.getJsonContent(this.dataFilePath);

      return tasks.filter(task => task.status === TaskStatus.inProgress);
    } else {
      return this.getJsonContent(this.dataFilePath);
    }
  }

  private createLogsFiles = () => {
    if ( !fs.existsSync( this.dataFolderPath ) ) {
      fs.mkdirSync( this.dataFolderPath );
    }

    if ( fs.existsSync( this.dataFilePath ) ) return;

    fs.writeFileSync( this.dataFilePath, '[]' );
  };

  private getJsonContent(path: string): Task[] {
    const jsonData =  fs.readFileSync(path, 'utf-8');

    return JSON.parse(jsonData);
  } 

}
