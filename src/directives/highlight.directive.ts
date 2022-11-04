import { Directive } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
  host: {
    '[style.background-color]': "'#bada55'",
    '[style.padding]': "'0.1em 0.2em'",
    '[style.margin-top]': "'0.1em'",
  },
})
export class HighlightDirective {}
