import {
  Component,
  inject,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';
import { PostsService } from '../../../core/services/posts/posts.service';
import { IPosts, IUserData } from '../../interfaces/posts/posts';
import { CommentsComponent } from '../comments/comments.component';
import { DatePipe } from '@angular/common';
import { UsersService } from '../../../core/services/users/users.service';

@Component({
  selector: 'app-mypost',
  imports: [CommentsComponent, DatePipe],
  templateUrl: './mypost.component.html',
  styleUrl: './mypost.component.scss',
})
export class MypostComponent implements OnInit {
  private readonly postsService = inject(PostsService);
  mypost: WritableSignal<IPosts[]> = signal([]);

  private readonly usersService = inject(UsersService);

  userdata: WritableSignal<IUserData> = signal(<IUserData>{});
  // userData: WritableSignal<Iuser> = signal({} as Iuser);
  // getUserDataSubs!: Subscription;

  getUserData(): void {
    this.usersService.getLoggedUserData().subscribe({
      next: (res) => {
        console.log(res);
        this.userdata.set(res);
        // this.userData.set(res.user);
      },
    });
  }

  isload: WritableSignal<boolean> = signal(true);
  ngOnInit(): void {
    this.getUserData();
    this.isload.set(false),
      this.postsService.getMyPost(50).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            console.log(res.posts);
            this.mypost.set(res.posts);
            this.isload.set(true);
          }
        },
      });
  }
}
