import { Component, input, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
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
