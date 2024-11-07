import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div>
      <ng-content />
    </div>
  `,
  styles: `
  div {
    border-radius: 6px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  `,
  // templateUrl: './card.component.html',
  // styleUrl: './card.component.scss'
})
export class CardComponent {

}
