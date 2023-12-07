import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient
  ) { }

  login(body: { username: string, password: string }) {
    return this.http.post<any>(`${this.apiUrl}/user/login`, body);
  }
}
