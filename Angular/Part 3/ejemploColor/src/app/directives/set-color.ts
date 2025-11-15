import { Directive, effect, ElementRef, inject, input, signal } from '@angular/core';

@Directive({
  selector: '[setColor]',
  host: {
    '[style.backgroundColor]': 'color()',
    '[style.color]': 'textColor()',
    '(click)': 'toggleTextColor()',
  },
})
export class SetColor {
  color = input.required<string>({ alias: 'setColor' });
  textColor = signal('black');
  //elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  /* constructor() {
    effect(() => this.elementRef.nativeElement.style.backgroundColor = this.color());
  } */
  toggleTextColor() {
    this.textColor.update((c) => (c === 'black' ? 'white' : 'black'));
  }
}
