import { Component, OnInit } from '@angular/core';
import { MuseumDetail } from '../museum/museum-detail/museum-detail';
import { MuseumService } from '../museum/museum.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ArtistService } from '../artist/artist.service';
import { Artist } from '../artist/artist';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  museums: Array<MuseumDetail> = [];
  artists: Array<Artist> = [];

  constructor(private museumService : MuseumService, private artistService: ArtistService,
    public carouselConfig: NgbCarouselConfig, private sharedService: SharedService) {
    this.sharedService.setSite('Home');
    this.configSlider();
  }

  ngOnInit(): void {
    this.getMuseums();
    this.getArtists();
  }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe(museums  =>{
      this.museums = museums;
    });
  }

  getArtists(): void {
    this.artistService.getArtists().subscribe((artists) =>{
      this.artists = artists.map((a)=>{
        a.birthdate = new Date(a.birthdate);
        return a;
      });
    });
  }

  configSlider():void{
    this.carouselConfig.interval = 7500;
    this.carouselConfig.wrap = false;
    this.carouselConfig.keyboard = true;
    this.carouselConfig.pauseOnHover = false;
    this.carouselConfig.wrap = true;
  }

}
