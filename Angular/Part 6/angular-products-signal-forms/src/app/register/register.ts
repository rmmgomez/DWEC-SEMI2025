import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, required, email, validate, Field } from '@angular/forms/signals';

@Component({
  selector: 'register',
  imports: [Field],
  templateUrl: './register.html',
  styleUrl: './register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  userModel = signal({
    name: '',
    email: '',
    repeatEmail: '',
    daysOpen: new Array(7).fill(false),
  });
  days = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
  userForm = form(this.userModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    required(schema.repeatEmail, { message: 'Repeat email is required' });
    email(schema.email, { message: 'Email must have the right format' });
    email(schema.repeatEmail, { message: 'Email must have the right format' });
    validate(schema.daysOpen, ({ value }) => {
      if (value().every((v) => v === false)) {
        return {
          kind: 'anyChecked',
          message: 'You must select at least 1 day',
        };
      }
      return null;
    });
    validate(schema.repeatEmail, ({ value, valueOf }) => {
      const email = valueOf(schema.email); // Creamos dependencia con este valor
      if (value() !== email) {
        return {
          kind: 'sameEmail',
          message: 'Emails are not equal',
        };
      }
      return null;
    });
  });
}
