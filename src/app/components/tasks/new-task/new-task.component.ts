import { Component, inject, input, output, signal } from '@angular/core';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  private _tasksService = inject(TasksService);
  userId = input.required<string>();
  close = output<void>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this._tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate()
    }, this.userId())

    this.close.emit();
  }
}
