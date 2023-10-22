import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Sponsor } from './sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

createSponsor(sponsor: Sponsor): Observable<Sponsor> {
  return this.http.post<Sponsor>(this.apiUrl + 'sponsors', sponsor);
}
}
