import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StringConstants } from '@todolist/shared';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerTitle = StringConstants.REGISTER_TITLE;
  registerUsernameLabel = StringConstants.REGISTER_USERNAME_LABEL;
  registerEmailLabel = StringConstants.REGISTER_EMAIL_LABEL;
  registerPasswordLabel = StringConstants.REGISTER_PASSWORD_LABEL;
  registerSubmitButton = StringConstants.REGISTER_SUBMIT_BUTTON;
  registerLoginLink = StringConstants.REGISTER_LOGIN_LINK;
  registerUsernameRequired = StringConstants.REGISTER_USERNAME_REQUIRED;
  registerUsernameMinLength = StringConstants.REGISTER_USERNAME_MIN_LENGTH;
  registerEmailRequired = StringConstants.REGISTER_EMAIL_REQUIRED;
  registerEmailInvalid = StringConstants.REGISTER_EMAIL_INVALID;
  registerPasswordRequired = StringConstants.REGISTER_PASSWORD_REQUIRED;
  registerPasswordMinLength = StringConstants.REGISTER_PASSWORD_MIN_LENGTH;
  registerAlreadyHaveAccount = StringConstants.REGISTER_ALREADY_HAVE_ACCOUNT;

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Aqui você pode adicionar a lógica para enviar os dados para o backend
    }
  }
}
