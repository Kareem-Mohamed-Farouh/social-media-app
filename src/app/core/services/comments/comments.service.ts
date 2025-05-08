import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { commentsEndPoints } from '../../environment/commentsEndPoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private readonly httpClient: HttpClient) {}

  creatComment(comentData: object): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}${commentsEndPoints.creatComment}`,
      comentData
    );
  }

  getPostComments(postId: string): Observable<any> {
    return this.httpClient.get(
      `${environment.baseUrl}posts/${postId}${commentsEndPoints.getPostComments}`
    );
  }

  updateComment(commentId: string, commentData: object): Observable<any> {
    return this.httpClient.put(
      `${environment.baseUrl}${commentsEndPoints.updateComment}${commentId}`,
      commentData
    );
  }

  deleteComment(commentId: string): Observable<any> {
    return this.httpClient.delete(
      `${environment.baseUrl}${commentsEndPoints.deleteComment}${commentId}`
    );
  }
}
