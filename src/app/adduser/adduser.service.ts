import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //userUrl = 'http://localhost:3020/bookList';
  constructor(private http: HttpClient) { }
  addBook(user: User): Observable<any> {
    return this.http.post<User>('http://localhost:3333/UserAPI/user',user);
  }
  getUser(){
    return[
      {
        "name": "Harini",
        "mailid": "harini@gmail.com"
      },

    ];
  }
}