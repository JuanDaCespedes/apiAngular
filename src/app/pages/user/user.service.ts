import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private resourceUrl = AppConstants.API_BASE_URL;
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<HttpResponse<any[]>> {

    return this.http.get<any[]>(this.resourceUrl+'/Usuarios', {observe: 'response'})
  }

  postUser(usuario: any): Observable<HttpResponse<any>> {

    return this.http.post<any>(this.resourceUrl+'/Usuarios/register', usuario)

  }

  deleteUser(id: string): Observable<HttpResponse<any>>{

    return this.http.delete(this.resourceUrl+'/Usuarios/'+id, {observe: 'response'});

  }

}
