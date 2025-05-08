import { Routes } from '@angular/router';
import { StartjoinComponent } from './shared/components/startjoin/startjoin.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TimelineComponent } from './shared/components/timeline/timeline.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { LogiinComponent } from './shared/components/logiin/logiin.component';
import { MypostComponent } from './shared/components/mypost/mypost.component';
import { noAuthGuard } from './core/guards/no-auth.guard';
import { haveAuthGuard } from './core/guards/have-auth.guard';

export const routes: Routes = [
  {
    path: '',

    redirectTo: 'startJoinX',
    pathMatch: 'full',
  },
  {
    path: 'startJoinX',
    canActivate: [noAuthGuard],
    component: StartjoinComponent,
    title: 'join To X',
  },

  {
    path: 'login',
    canActivate: [noAuthGuard],
    component: LogiinComponent,
    title: 'login',
  },

  {
    path: 'home',
    canActivate: [haveAuthGuard],
    component: NavbarComponent,
    title: 'Home',
    children: [
      {
        path: '',
        redirectTo: 'timeline',
        pathMatch: 'full',
      },
      {
        path: 'timeline',
        component: TimelineComponent,
        title: 'time Line',
      },

      {
        path: 'mypost',
        component: MypostComponent,
        title: 'My Post',
      },
    ],
  },
];
