import { Component } from '@angular/core';
import { NameComponent } from '../name/name.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  standalone: true,
  imports: [NameComponent, HighlightDirective],
  template: `
    <h1>Title About</h1>
    <p highlight>Description</p>

    <h2>Sub-title About</h2>
    <p highlight>Description</p>
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
export class AboutComponent {}
