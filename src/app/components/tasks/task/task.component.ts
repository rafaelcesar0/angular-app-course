import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { CardComponent } from "../../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
