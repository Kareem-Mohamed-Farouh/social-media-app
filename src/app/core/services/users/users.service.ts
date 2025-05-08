import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { usersEndpoint } from '../../environment/usersEndpoints';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly htttp: HttpClient) {}

  signup(data: object): Observable<any> {
    return this.htttp.post(
      `${environment.baseUrl}${usersEndpoint.signup}`,
      data
    );
  }

  signin(data: object): Observable<any> {
    return this.htttp.post(
      `${environment.baseUrl}${usersEndpoint.signin}`,
      data
    );
  }

  changePassword(data: object): Observable<any> {
    return this.htttp.patch(
      `${environment.baseUrl}${usersEndpoint.changePassword}`,
      data
    );
  }

  uploadProfilePhoto(data: FormData): Observable<any> {
    return this.htttp.put(
      `${environment.baseUrl}${usersEndpoint.UploadProfilePhoto}`,
      data
    );
  }

  getLoggedUserData(): Observable<any> {
    return this.htttp.get(
      `${environment.baseUrl}${usersEndpoint.getLoggedUserData}`
    );
  }

  private readonly router = inject(Router);
  logOut() {
    localStorage.removeItem('Token');
    this.router.navigate(['startJoinX']);
  }
}
