import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CheckuserService{
  constructor(private http: HttpClient) { }

  checkUser(s: string):Observable<string>{
    return this.http.post<string>('http://localhost:3333/UserAPI/check',s)
  }
   
}