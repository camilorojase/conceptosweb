import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExhibicionDetail } from './exhibicion-detail';
import { environment } from '../../environments/environment';
import { Exhibicion } from './exhibicion';

@Injectable({
  providedIn: 'root'
})
export class ExhibicionService {
  private apiUrl = environment.baseUrl + 'museums/';
  private apiUrlEx = environment.baseUrl + 'exhibitions/';

  constructor(private http: HttpClient) { }

  getExhibiciones(museumId:string): Observable<ExhibicionDetail[]> {
    return this.http.get<ExhibicionDetail[]>(this.apiUrl + museumId + '/exhibitions');
  }

  getExhibicion(id: string, museumId:string): Observable<ExhibicionDetail> {
    return this.http.get<ExhibicionDetail>(this.apiUrl+ museumId + '/exhibitions' + "/" + id);
  }

  createExhibicion(exhibicion: Exhibicion, museumId:string): Observable<Exhibicion> {
    return this.http.post<Exhibicion>(this.apiUrl+ museumId + '/exhibitions', exhibicion);
  }

  associateArtworkToExhibition(artworks: any, museumId:string): Observable<any> {
    return this.http.put<any>(this.apiUrlEx + museumId + '/artworks', artworks);
  }
}
