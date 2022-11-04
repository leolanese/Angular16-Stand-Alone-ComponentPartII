import { Directive } from '@angular/core';

@Directive({
  selector: '[borders]',
  standalone: true,
  host: {
    style: 'border: 1px dashed red',
  },
})
export class BorderRedDirective {}
