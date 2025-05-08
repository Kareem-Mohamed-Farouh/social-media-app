import { LoginComponent } from '../login/login.component';
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
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { UsersService } from '../../../core/services/users/users.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-logiin',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FormsModule,
    PasswordModule,
    DividerModule,
    DatePickerModule,
    FloatLabelModule,
  ],
  templateUrl: './logiin.component.html',
  styleUrl: './logiin.component.scss',
})
export class LogiinComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly usersService = inject(UsersService);
  private readonly router = inject(Router);
  loginForm!: FormGroup;
  Token: WritableSignal<string> = signal('');
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
        ],
      ],
    });
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      this.usersService.signin(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            console.log(res);
            this.Token.set(res.token);
            localStorage.setItem('Token', this.Token());
            this.router.navigate(['/home']);
          }
        },
        error: (err) => {
          console.log(this.loginForm.value);
          console.log(err);
        },
      });
    }
  }
}
