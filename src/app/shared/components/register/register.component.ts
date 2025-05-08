import {
  Component,
  inject,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  pattern,
  RxReactiveFormsModule,
  RxwebValidators,
} from '@rxweb/reactive-form-validators';
import { UsersService } from '../../../core/services/users/users.service';
import { sign } from 'node:crypto';
import { Router } from '@angular/router';
import { json } from 'node:stream/consumers';
@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    DatePickerModule,
    FloatLabelModule,
    InputTextModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly usersService = inject(UsersService);
  private readonly router = inject(Router);
  registerForm!: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm = this.formBuilder.group(
      {
        name: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
          ],
        ],
        rePassword: ['', [Validators.required]],
        dateOfBirth: [null, [Validators.required]],
        gender: [null, [Validators.required]],
      },
      { validators: [this.confirmPassword] }
    );
  }
  submitRegisterForm() {
    if (this.registerForm.valid) {
      this.usersService.signup(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(this.registerForm.value);
          console.log(res);
          localStorage.setItem(
            'userInfo',
            JSON.stringify(this.registerForm.value)
          );
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log(this.registerForm.value);
          console.log(err);
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  confirmPassword(group: AbstractControl) {
    const password = group.get('password')?.value;

    const rePassword = group.get('rePassword')?.value;

    return password === rePassword ? null : { mismatch: true };
  }
}
