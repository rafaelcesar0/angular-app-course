import { Injectable } from '@angular/core';
import { type Task } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
  private _tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular1',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master Angular1.1',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master Angular2',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Master Angular3',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
  ];

  getUserTasks(userId: string): Task | undefined {
    return this._tasks.find(task => task.userId === userId)
  }

  constructor() { }

}
