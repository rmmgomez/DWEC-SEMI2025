import { Directive, input } from '@angular/core';
import { NG_VALIDATORS, FormControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDate, multi: true }],
})
export class MinDate {
  minDate = input.required<string>();

  validate(control: FormControl<string>): ValidationErrors | null {
    if (this.minDate() && control.value && this.minDate() > control.value) {
      return { minDate: true }; // Error returned
    }

    return null; // No errors
  }
}
