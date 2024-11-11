import { Component, input, output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();
  select = output<string>();
  disabledButton = input(false, {
    transform: (value: string | boolean): boolean =>
      typeof value === 'string' ? value === '' || value === 'true' : value,
  });

  get imageUserPath() {
    return `assets/users/${this.user().avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
