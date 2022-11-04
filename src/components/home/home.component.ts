import { Component } from '@angular/core';
import { BorderRedDirective } from '../../directives/borderRed.directive';

@Component({
  standalone: true,
  imports: [BorderRedDirective],
  template: `
  <h1 borders>Title home</h1>
  <p>Description</p>

  <h2 borders>Sub-title home</h2>
  <p>Description</p>
  `,
  styles: [
    `
      :host {
        padding: 70px 0;
        text-align: center;
      }
    `,
  ],
})
export class HomeComponent {}
