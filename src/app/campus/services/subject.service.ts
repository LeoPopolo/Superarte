import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';

type SubjectResponse = { data: Subject[] };
@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  apiUrl: string = 'http://localhost:3000/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  getSubjects() {
    return this.httpClient.get<SubjectResponse>(`${this.apiUrl}/subject`);
  }
}
