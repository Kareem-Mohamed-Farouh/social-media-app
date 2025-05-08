import { Component, inject, signal, WritableSignal } from '@angular/core';
import { UsersService } from '../../core/services/users/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IUserData } from '../../shared/interfaces/posts/posts';

@Component({
  selector: 'app-uploadmyphotoform',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './uploadmyphotoform.component.html',
  styleUrl: './uploadmyphotoform.component.scss',
})
export class UploadmyphotoformComponent {
  private readonly usersService = inject(UsersService);
  userdata: WritableSignal<IUserData> = signal(<IUserData>{});
  userphoto!: File;
  getUserData(): void {
    this.usersService.getLoggedUserData().subscribe({
      next: (res) => {
        console.log(res);
        this.userdata.set(res);
        // this.userData.set(res.user);
      },
    });
  }
  myImage(e: Event): void {
    const dataImg = e.target as HTMLInputElement;
    if (dataImg.files && dataImg.files.length > 0) {
      console.log(dataImg.files[0]);
      this.userphoto = dataImg!.files![0];
    }
  }

  changePhoto(): void {
    const myPhoto = new FormData();
    myPhoto.append('photo', this.userphoto);
    this.usersService.uploadProfilePhoto(myPhoto).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
