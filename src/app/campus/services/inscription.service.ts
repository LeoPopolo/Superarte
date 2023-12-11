import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscription, InscriptionRequest } from '../models/inscription';

type InscriptionResponse = { data: Inscription[] };

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  apiUrl: string = 'http://localhost:3000/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  createInscription(inscription: InscriptionRequest) {

    return this.httpClient.post<InscriptionResponse>(`${this.apiUrl}/inscription`, inscription);
  }

  getPupilInscriptions(pupilId: number) {

    let params = new HttpParams();

    params = params.set('pupilId', pupilId);

    return this.httpClient.get<InscriptionResponse>(`${this.apiUrl}/inscription`, { params });
  }

  getSubjectInscriptions(subjectId: number) {
    let params = new HttpParams();

    params = params.set('subjectId', subjectId);

    return this.httpClient.get<InscriptionResponse>(`${this.apiUrl}/inscription`, { params });
  }
}
