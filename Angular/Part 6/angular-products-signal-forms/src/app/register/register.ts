import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, required, email, validate, Field } from '@angular/forms/signals';
import { GoogleLogin } from '../google-login/google-login';
import { FormsModule } from '@angular/forms';
import { FbLogin } from '../facebook-login/fb-login';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'register',
  imports: [Field, GoogleLogin, FormsModule, FbLogin, FontAwesomeModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  iconFacebook = faFacebook;
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
  loggedGoogle(resp: google.accounts.id.CredentialResponse) {
    // Envia esto tu API
    console.log(resp.credential);
  }

  loggedFacebook(resp: fb.StatusResponse) {
    // Envía esto a tu API
    console.log(resp.authResponse.accessToken);
    
  }

  showError(error: any) {
    console.error(error);
  }
}
