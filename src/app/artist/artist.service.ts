import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './artist';
import { ArtistDetail } from './artist-detail';

import { environment } from '../../environments/environment';
import { City } from './city';
import { Country } from './country';
import { Region } from './region';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private apiUrl: string = environment.baseUrl;
  private xapikey:string = environment.apikeyBattuta;

  constructor(private http: HttpClient) { }

  getArtists(): Observable<Artist[]>{
    return this.http.get<Artist[]>(this.apiUrl+'artists/');
  }

  getArtist(id:number): Observable<ArtistDetail>{
    return this.http.get<ArtistDetail>(this.apiUrl + 'artists/' + id)
  }

  createArtist(artist:Artist): Observable<Artist>{
    return this.http.post<Artist>(this.apiUrl+'artists/', artist);
  }

  editArtist(artist:Artist, id: number): Observable<Artist>{
    return this.http.put<Artist>(this.apiUrl+'artists/' + id, artist);
  }

  deleteArtist(id:number): Observable<any>{
    return this.http.delete<any>(this.apiUrl + 'artists/' + id);
  }

  getCities(country:string, region:string):Observable<City[]>{
    return this.http.get<City[]>(`/api/city/${country}/search/?region=${region}&key=${this.xapikey}`);
  }

  getCountries():Observable<Country[]>{
    return this.http.get<Country[]>(`/api/country/all/?key=${this.xapikey}`);
  }

  getRegions(code:string):Observable<Region[]>{
    return this.http.get<Region[]>(`/api/region/${code}/all/?key=${this.xapikey}`);
  }

}
