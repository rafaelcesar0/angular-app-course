import { Component, inject, input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  private _tasksService = inject(TasksService);
  task = input.required<Task>();

  onCompleteTask() {
    this._tasksService.removeTaskById(this.task().id)
  }
}
