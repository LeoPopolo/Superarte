import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserRequest, UserType } from '../models/user';

type UserResponse = { data: User[] };
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = 'http://localhost:3000/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(type: UserType) {
    let params = new HttpParams();

    params = params.set('userType', type);

    return this.httpClient.get<UserResponse>(`${this.apiUrl}/user`, { params });
  }

  createUser(user: UserRequest) {
    return this.httpClient.post<UserResponse>(`${this.apiUrl}/user`, user);
  }
}
