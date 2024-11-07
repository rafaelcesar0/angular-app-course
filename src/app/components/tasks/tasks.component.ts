import { Component, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type User } from '../user/user.model';
import { type Task, type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  user = input.required<User>();
  selectedUserId = input<string>();
  isAddingTask = signal(false);
  tasks = signal<Task[]>([
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
  ]);

  get selectUserTasks() {
    return this.tasks().filter((task) => task.userId === this.selectedUserId());
  }

  onCompleteTask(id: string) {
    this.tasks.set(this.tasks().filter((task) => task.id !== id));
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }
  onCanceltAddTask() {
    this.isAddingTask.set(false);
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.update((tasks) => {
      tasks.push({
        id: 'd',
        userId: this.user().id,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      });

      return tasks;
    });
    this.isAddingTask.set(false);
  }
}
