import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

  private resourceUrl = AppConstants.API_BASE_URL;
  
  constructor(private http: HttpClient) { }

  getPeople(): Observable<HttpResponse<any[]>> {

    return this.http.get<any[]>(this.resourceUrl+'/Personas', {observe: 'response'})
  }

  getPerson(id: string): Observable<HttpResponse<any[]>> {

    return this.http.get<any[]>(this.resourceUrl+'/Personas/'+id, {observe: 'response'})

  }

  postPerson(people: any): Observable<HttpResponse<any>> {

    return this.http.post<any>(this.resourceUrl+'/Personas', people)

  }

  putPerson(people: any, id: string): Observable<HttpResponse<any>> {

    delete(people._id);

    return this.http.put<any>(this.resourceUrl+'/Personas/'+id, people)

  }

  deletePerson(id: string): Observable<HttpResponse<any>>{

    return this.http.delete(this.resourceUrl+'/Personas/'+id, {observe: 'response'});

  }
}
