import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dataUri, ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { PostsService } from '../../../../core/services/posts/posts.service';

@Component({
  selector: 'app-modal-creat-post',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './modal-creat-post.component.html',
  styleUrl: './modal-creat-post.component.scss',
})
export class ModalCreatPostComponent {
  private readonly postsService = inject(PostsService);

  content!: string;
  savedImage!: File;

  saveImage(e: Event): void {
    const dataImg = e.target as HTMLInputElement;
    this.savedImage = dataImg!.files![0];
  }

  addpost() {
    const data = new FormData();
    data.append('body', this.content);
    data.append('image', this.savedImage);

    this.postsService.creatPost(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
