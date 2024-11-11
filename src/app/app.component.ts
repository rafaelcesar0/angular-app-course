import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

import { DUMMY_USERS } from './constants/dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';
import { type User } from './components/user/user.model';


@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly users = DUMMY_USERS;
  selectedUserId = signal('');

  get selectedUser(): User | undefined {
    return this.users.find((user) => user.id === this.selectedUserId());
  }

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
    // console.log(`Selecte user with id: ${id}`);
  }
}
