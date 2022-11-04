import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-name',
  template: `
    <ng-content></ng-content>, {{ name }}.
  `,
  styles: [``],
})
export class NameComponent {
  @Input() name = '';
}
