import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { PasswordModule } from 'primeng/password';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { UsersService } from '../../../core/services/users/users.service';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, PasswordModule, DividerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
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
    // if (this.loginForm.valid) {
    this.usersService.signin(this.loginForm.value).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          console.log(res);
          this.Token.set(res.token);
          this.router.navigate(['/home']);
          localStorage.setItem('Token', this.Token());
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
// }
