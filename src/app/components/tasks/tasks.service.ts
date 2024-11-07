import { Injectable, signal } from '@angular/core';
import { type NewTaskData, type Task } from './task/task.model';
import { JsonPipe } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private _tasks = signal<Task[]>([
    {
      id: 'i1',
      userId: 'u1',
      title: 'Master Angular1',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 'i2',
      userId: 'u1',
      title: 'Master Angular1.1',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 'i3',
      userId: 'u2',
      title: 'Master Angular2',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 'i4',
      userId: 'u3',
      title: 'Master Angular3',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
  ]);

  // constructor() {
  //   const tasks = localStorage.getItem('tasks');

  //   if (tasks) {
  //     this._tasks.set(JSON.parse(tasks));
  //   }
  // }

  getUserTasks(userId: string): Task[] | undefined {
    return this._tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this._tasks.update((tasks) => {
      tasks.unshift({
        id: `i${this._tasks().length + 1}`,
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      });

      return tasks;
    });
    // this.saveTasks();
  }

  removeTaskById(id: string): boolean {
    const indexId = this._tasks().findIndex((task) => task.id === id);

    if (indexId !== -1){
      this._tasks.update((tasks) => {
        tasks.splice(indexId, 1);
        return tasks;
      });
      // this.saveTasks();
      return true
    }
    return false
  }

  // private saveTasks() {
  //   localStorage.setItem('tasks', JSON.stringify(this._tasks));
  // }
}
