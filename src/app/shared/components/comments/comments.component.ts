import { IComment, IData } from './../../interfaces/posts/posts';
import {
  Component,
  inject,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommentsService } from '../../../core/services/comments/comments.service';
import { DatePipe } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-comments',
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  private readonly commentsService = inject(CommentsService);
  private readonly formBuilder = inject(FormBuilder);
  postid: InputSignal<string> = input.required();
  allComments: WritableSignal<IComment[]> = signal([]);
  data: WritableSignal<number> = signal(0);

  commentForm!: FormGroup;
  editCommentForm!: FormGroup;
  ngOnInit(): void {
    this.getAllComments();
    this.creatcomentform();
    this.editCommenteForm();
  }

  creatcomentform() {
    this.commentForm = this.formBuilder.group({
      content: [null, [Validators.required]],
      post: [this.postid(), [Validators.required]],
    });
  }
  editCommenteForm() {
    this.editCommentForm = this.formBuilder.group({
      content: [null, [Validators.required]],
    });
  }

  editeMyComment(comentId: string): void {
    this.commentsService
      .updateComment(comentId, this.editCommentForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.getAllComments();
        },
      });
  }
  creatComment(): void {
    this.commentsService.creatComment(this.commentForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.allComments.set(res.comments);
      },
    });
  }

  getAllComments() {
    this.commentsService.getPostComments(this.postid()).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          console.log(res);
          this.allComments.set(res.comments);
          console.log();
          this.data.set(res.total);
        }
      },
    });
  }
}
