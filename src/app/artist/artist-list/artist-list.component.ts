import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = []
  id_artist: number = 0;

  constructor(
    private artistService:ArtistService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  getArtists(): void {
    this.sharedService.setSiteEs('Artista');
    this.sharedService.setSite('Artist');
    this.artistService.getArtists().subscribe((artists) =>{
      this.artists = artists.map((a)=>{
        a.birthdate = new Date(a.birthdate);
        //console.log(a.birthdate.getFullYear());
        return a;
      });
    });
  }

  selectArtist(id:number): void{
    this.id_artist=id;
  }

  ngOnInit() {
    this.getArtists();
  }

  ngOnChanges(){
    this.getArtists();
  }

}
