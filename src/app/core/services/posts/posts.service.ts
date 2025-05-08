import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { postsEndPoints } from '../../environment/postsEndPoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private readonly httpClient: HttpClient) {}

  creatPost(data: FormData): Observable<any> {
    return this.httpClient.post(
      `${environment.baseUrl}${postsEndPoints.creatPost}`,
      data
    );
  }

  getAllPost(page: number = 1, limit: number = 50): Observable<any> {
    return this.httpClient.get(
      `${environment.baseUrl}${postsEndPoints.getAllPosts}?page=${page}&limit=${limit}`
    );
  }

  getMyPost(limit: number = 2): Observable<any> {
    return this.httpClient.get(
      `${environment.baseUrl}${postsEndPoints.getMyPosts}${limit}`
    );
  }

  getSinglePost(idPost: string): Observable<any> {
    return this.httpClient.get(
      `${environment.baseUrl}${postsEndPoints.getSinglePosts}${idPost}`
    );
  }
  updatePost(idPost: string, data: FormData): Observable<any> {
    return this.httpClient.put(
      `${environment.baseUrl}${postsEndPoints.UpdatePost}${idPost}`,
      data
    );
  }

  deletePost(idPost: string): Observable<any> {
    return this.httpClient.delete(
      `${environment.baseUrl}${postsEndPoints.deletePost}${idPost}`
    );
  }
}
