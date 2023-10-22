import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Museum } from './museum';
import { environment } from 'src/environments/environment';
import { MuseumDetail } from './museum-detail/museum-detail';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  private apiUrl: string = environment.baseUrl!;

  constructor(private http: HttpClient) { }

  getMuseums (): Observable<MuseumDetail[]> {
    return this.http.get<MuseumDetail[]>(this.apiUrl + 'museums/');
  }

  getMuseum(id: string): Observable<MuseumDetail> {
    return this.http.get<MuseumDetail>(this.apiUrl + "museums/" + id);
  }

  createMuseum(museum: Museum): Observable<Museum> {
    return this.http.post<Museum>(this.apiUrl + 'museums/', museum);
  }
}
