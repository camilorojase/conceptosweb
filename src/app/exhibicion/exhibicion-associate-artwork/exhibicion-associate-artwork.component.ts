import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist/artist';
import { ArtistService } from 'src/app/artist/artist.service';
import { Artwork } from 'src/app/artwork/artwork';
import { ArtworkService } from 'src/app/artwork/artwork.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ExhibicionService } from '../exhibicion.service';
import { ExhibicionDetail } from '../exhibicion-detail';

@Component({
  selector: 'app-exhibicion-associate-artwork',
  templateUrl: './exhibicion-associate-artwork.component.html',
  styleUrls: ['./exhibicion-associate-artwork.component.css']
})
export class ExhibicionAssociateArtworkComponent implements OnInit {

  artists:Array<Artist> =[];
  artworks:Array<Artwork> =[];
  exhibitionId!: string;
  museumId!: string;
  myForm!: FormGroup;
  isDisabled!: boolean;
  ExhibicionDetail!: ExhibicionDetail;
  result: any;

  constructor(private artworkService : ArtworkService, private artistService:ArtistService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,private route: ActivatedRoute,
    private exhibicionService: ExhibicionService) {
      this.exhibitionId = this.route.snapshot.paramMap.get('exhibitionId')!;
      this.museumId = this.route.snapshot.paramMap.get('museumId')!;
    }

  ngOnInit(): void {
        this.isDisabled=true;
        this.myForm = this.formBuilder.group({
          exhibition: ["", [Validators.required]],
          artist: ["", [Validators.required]],
          artwork: ["", [Validators.required]]
        });
        this.getExhibicion();
        this.getArtists();
  }

  getArtists():void {
    this.artists = [];
        this.artistService.getArtists().subscribe((artists) => {
        this.artists = artists;
        });
  }

  getArtworks(artistId: number): void {
    this.artworks = [];
      this.artworkService.getArtistArtworks(artistId).subscribe((artworksAux) => {
        this.artworks = artworksAux;
      });
  }

  getExhibicion(){
    this.exhibicionService.getExhibicion(this.exhibitionId, this.museumId).subscribe(obj =>{
      this.ExhibicionDetail = obj;
      this.myForm.controls['exhibition'].setValue(this.ExhibicionDetail.name);
    })
  }

  onCancel() {
    this.myForm.reset();
    this.activeModal.close(null);
   }

  updateForm(){
    this.isDisabled=true;
  }

  associateArtworkToExhibition(){
    if(!this.myForm.invalid) {
      const artworks = [
        {id: this.myForm.controls['artist'].value}
      ];
      this.exhibicionService.associateArtworkToExhibition(artworks, this.museumId).subscribe( (data) => {
        console.log("The association successful: ", data)
        this.toastr.success("Confirmation", "Association successful")
        this.result = data;
        this.activeModal.close(this.result);      },
      (error) => {
        console.log(error);
      });
   }
  }

  onCreate(){
    this.associateArtworkToExhibition();
  }

  onChangeArtist(event:any){
    this.getArtworks(event.target.value);
  }
}
