import { Component, input } from '@angular/core';
import { User } from '../../constants/dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  user = input.required<User>();
}
