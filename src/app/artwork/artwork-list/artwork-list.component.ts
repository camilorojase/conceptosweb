import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { throws } from 'assert';
import { Artist } from 'src/app/artist/artist';
import { ArtistService } from 'src/app/artist/artist.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Artwork } from '../artwork'
import { ArtworkDetail } from '../artwork-detail';
import { ArtworkService } from '../artwork.service'

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  //@Input() id_padre: number = 0;
  //@Input() padre: boolean = false;
  artists:Array<Artist> =[];
  artworks:Array<Artwork> =[];
  selected: boolean=false;
  SelectedArtwork!: ArtworkDetail;
  artworkId!: string;

  //artworks: Artwork[] = [];

  constructor(private artworkService : ArtworkService, private artistService:ArtistService
    , private sharedService: SharedService, private route: ActivatedRoute) {
    this.sharedService.setSite('Artworks');
  }

  getArtists():void {
      this.artistService.getArtists().subscribe((artists) => {
      this.artists = artists;
      artists.forEach((artist) =>{
      this.getArtworks(artist);
        })
      });
  }

  getArtworks(artist: Artist): void {
    this.artworkService.getArtistArtworks(artist.id).subscribe((artworksAux) => {
      for (var i =0 ; i < artworksAux.length; i++){
        artworksAux[i].short_description = artworksAux[i].description.substring(0,120);
        artworksAux[i].artist = artist;
        this.artworks.push(artworksAux[i]);
        if(i < artworksAux.length-1){
          if(this.route.snapshot.paramMap.get('id')){
            this.artworkId = this.route.snapshot.paramMap.get('id')!;
            this.SelectedArtwork =this.artworks.find(x => x.id == Number(this.artworkId))!;
          }else{
            this.SelectedArtwork =this.artworks[0];
          }
          this.selected = true;
        }
      }
    });
  }

  /*getArtistArtworks(): void {
    this.artworkService.getArtistArtworks(this.id_padre).subscribe((artworks) =>{
      this.artworks = artworks;
    });
  }

  getExhibitionsArtworks(): void {
    this.artworkService.getExhibitionsArtworks(this.id_padre).subscribe((artworks) =>{
      this.artworks = artworks;
    });
  }*/

  onSelectedArtwork(artwork: ArtworkDetail): void {
    this.selected = true;
    this.SelectedArtwork = artwork;
  }

  ngOnInit(): void {
    //  this.padre? this.getExhibitionsArtworks() : this.getArtistArtworks()
    this.getArtists();
  }
}
