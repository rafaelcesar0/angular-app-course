import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { type User } from '../user/user.model';
import { type Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  user = input.required<User>();
  selectedIdUser = input<string>();
  tasks: Task[] = [
    {
      id: 't1',
      idUser: 'u1',
      title: 'Master Angular1',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 't2',
      idUser: 'u1',
      title: 'Master Angular1.1',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 't3',
      idUser: 'u2',
      title: 'Master Angular2',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
    {
      id: 't4',
      idUser: 'u3',
      title: 'Master Angular3',
      summary:
        'Learn all the basic and advanced feature of Angular & how to apply them.',
      dueDate: '2024-10-21',
    },
  ];

  get selectUserTasks() {
    return this.tasks.filter((task) => task.idUser === this.selectedIdUser());
  }
}
