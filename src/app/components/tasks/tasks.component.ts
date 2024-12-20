import { Component, inject, input, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type User } from '../user/user.model';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  private _tasksService = inject(TasksService);
  user = input.required<User>();
  selectedUserId = input.required<string>();
  isAddingTask = signal(false);

  // constructor(private _tasksService: TasksService) {}

  get selectUserTasks() {
    return this._tasksService.getUserTasks(this.user().id);
  }

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCloseAddTask() {
    this.isAddingTask.set(false);
  }
}
