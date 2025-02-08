import { booleanAttribute, Component, computed, input, output } from '@angular/core';
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
  imageUserPath = computed(() => `assets/users/${this.user().avatar}`)
  disabledButton = input(false, { transform: booleanAttribute });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
