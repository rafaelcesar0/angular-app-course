import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from "../../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
