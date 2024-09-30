/**
 * Esse componente foi criando usando o conceito mais moderno de ->SIGNAL<-,
 * uma forma mais otimizada do Angular detectar as alterações e atualizar o DOM.
 */

import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../../constants/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectdUser = signal(DUMMY_USERS[randomIndex]);
  imageUserPath = computed(() => 'assets/users/' + this.selectdUser().avatar);

  // get imageUserPath() {
  //   return 'assets/users/' + this.selectdUser().avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectdUser.set(DUMMY_USERS[randomIndex]);
    // this.selectdUser = DUMMY_USERS[randomIndex];
  }
}
