import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { StartjoinComponent } from '../startjoin/startjoin.component';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { LeftbarComponent } from '../leftbar/leftbar.component';
import { IUserData, iUserInfo } from '../../interfaces/posts/posts';
import { ModalCreatPostComponent } from '../comments/modal-creat-post/modal-creat-post.component';
import { UsersService } from '../../../core/services/users/users.service';
import { UploadmyphotoformComponent } from '../../../pages/uploadmyphotoform/uploadmyphotoform.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LeftbarComponent,
    ModalCreatPostComponent,
    UploadmyphotoformComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  userInfo: WritableSignal<iUserInfo> = signal(<iUserInfo>{});
  userdata: WritableSignal<IUserData> = signal(<IUserData>{});
  // userData: WritableSignal<Iuser> = signal({} as Iuser);
  // getUserDataSubs!: Subscription;
  private readonly usersService = inject(UsersService);
  getUserData(): void {
    this.usersService.getLoggedUserData().subscribe({
      next: (res) => {
        console.log(res);
        this.userdata.set(res);
        // this.userData.set(res.user);
      },
    });
  }
  ngOnChanges(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')!);
    this.getUserData();
  }
  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')!);
    this.getUserData();
  }

  signOutSuer() {
    this.usersService.logOut();
  }
}
