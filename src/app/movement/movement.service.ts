import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movement } from './movement';

import { environment } from '../../environments/environment';
import { ArtistDetail } from '../artist/artist-detail';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private apiUrl: string = environment.baseUrl!;
  constructor(private http: HttpClient) { }

  getMovements(): Observable<Movement[]>{
    return this.http.get<Movement[]>(this.apiUrl+'movements/');
  }

  getMovement(id:number): Observable<Movement>{
    return this.http.get<Movement>(this.apiUrl+'movements/'+id);
  }

  createMovement(movement:Movement): Observable<Movement>{
    return this.http.post<Movement>(this.apiUrl+'movements/', movement);
  }

  editMovement(movement:Movement, id:number): Observable<Movement>{
    return this.http.put<Movement>(this.apiUrl+'movements/'+ id, movement);
  }

  deleteMovement(id:number): Observable<any>{
    return this.http.delete<any>(this.apiUrl+'movements/'+id);
  }

  addMovementToArtist(id_artist: number, id_movement: number): Observable<ArtistDetail>{
    return this.http.post<ArtistDetail>(this.apiUrl + `artists/${id_artist}/movements/${id_movement}`, null);
  }

  delMovementToArtist(id_artist: number, id_movement: number): Observable<any>{
    return this.http.delete<any>(this.apiUrl + `artists/${id_artist}/movements/${id_movement}`);
  }



}
