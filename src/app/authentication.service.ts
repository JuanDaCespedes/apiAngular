import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AppConstants } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private resourceUrl = AppConstants.API_BASE_URL;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.resourceUrl + '/Usuarios/login', { username, password })

  }

  setSession(authResult: any) {

    localStorage.setItem('token', authResult.token);
}     

  logout(): void {
    localStorage.removeItem("token");
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }
}
