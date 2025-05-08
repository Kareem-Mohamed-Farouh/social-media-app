import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { UsersService } from '../../../core/services/users/users.service';
import { PostsService } from '../../../core/services/posts/posts.service';
import { IPosts, IUserData, iUserInfo } from '../../interfaces/posts/posts';
import { Datepicker } from 'flowbite-datepicker';
import { DatePipe } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-timeline',
  imports: [DatePipe, CommentsComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements OnInit {
  private readonly usersService = inject(UsersService);
  private readonly postsService = inject(PostsService);
  posts: WritableSignal<IPosts[]> = signal([]);
  isload: WritableSignal<boolean> = signal(true);
  userdata: WritableSignal<IUserData> = signal(<IUserData>{});
  result: WritableSignal<any> = signal({});

  curntNumPage: WritableSignal<number> = signal(1);

  ngOnInit(): void {
    this.getAllPosts(this.curntNumPage());
    this.getUserData();
  }

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

  getspecPosts2() {
    this.getAllPosts(this.curntNumPage() + 1);
  }
  getspecPosts() {
    if (this.curntNumPage() > 1) {
      this.getAllPosts(this.curntNumPage() - 1);
    }
  }
  getAllPosts(numberpage: number) {
    this.curntNumPage.set(numberpage);
    this.isload.set(false);
    this.postsService.getAllPost(this.curntNumPage()).subscribe({
      next: (res) => {
        console.log(res);
        this.result.set(res);
        this.posts.set(res.posts);
        this.isload.set(true);
      },
    });
  }
}
