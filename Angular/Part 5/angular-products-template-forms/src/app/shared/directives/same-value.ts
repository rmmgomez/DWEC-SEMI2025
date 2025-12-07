import { afterRenderEffect, Directive, input } from '@angular/core';
import { NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[sameValue]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SameValue, multi: true }],
})
export class SameValue {
  value = input.required<string>({ alias: 'sameValue' });

  #validationChange: undefined | (() => void);

  constructor() {
    // Con effect da error. afterRenderEffect es similar pero se ejecuta después del renderizado
    afterRenderEffect(() => {
      this.value(); // Creamos dependencia leyendo la señal
      if (this.#validationChange) {
        this.#validationChange(); // Revalidamos campo si cambia valor de entrada
      }
    });
  }

  validate(control: FormControl): ValidationErrors | null {
    if (control?.value !== this.value()) {
      return { sameValue: true };
    }

    return null; // No errors
  }

  registerOnValidatorChange(fn: () => void): void {
    this.#validationChange = fn;
  }
}
