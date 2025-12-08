import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export function matchEmail(c: AbstractControl): ValidationErrors | null {
  if (!(c instanceof FormGroup)) return null;
  const email = c.controls['email'].value;
  const email2 = c.controls['emailConfirm'].value;
  return email === email2 ? null : { match: true };
}
