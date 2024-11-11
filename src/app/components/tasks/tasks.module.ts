import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule,],
  exports: [TasksComponent],
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  providers: [],
})
export class TasksModule { }
