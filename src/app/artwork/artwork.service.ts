import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artwork } from './artwork';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private apiUrl: string = environment.baseUrl!;

  constructor(private http: HttpClient) { }

  getArtistArtworks(id_artist:number): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrl+'artists/'+ id_artist +'/artworks/');
    //return this.http.get<Artwork[]>(this.apiUrl+'artists/'+ 100 +'/artworks/');
  }

  getExhibitionsArtworks(id_exhibition:number): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrl+'exhibitions/'+ id_exhibition +'/artworks/');
    //return this.http.get<Artwork[]>(this.apiUrl+'exhibitions/'+ 100 +'/artworks/');
  }

  createArtWork(artwork :Artwork[], artistID:string):Observable<Artwork[]>{
    return this.http.post<Artwork[]>(this.apiUrl+'artists/' + artistID + '/artworks' ,artwork );

  }

  artworkAssociateImage(image: any, id_artist:string, id_artwork:string ): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'artists/' + id_artist + '/artworks/' + id_artwork + '/images/', image);
  }

  getArtworks(id_artwork:string, id_artist:string): Observable<Artwork> {
    return this.http.get<Artwork>(this.apiUrl + 'artists/' + id_artist +'/artworks/' + id_artwork);
  }
}
