import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-startjoin',
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './startjoin.component.html',
  styleUrl: './startjoin.component.scss',
})
export class StartjoinComponent {}
