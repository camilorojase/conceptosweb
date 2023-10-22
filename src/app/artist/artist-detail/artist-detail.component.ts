import { Component, OnInit } from '@angular/core';
import { ArtistDetail } from '../artist-detail';
import { ArtistService } from '../artist.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  id_artist!: number;
  artist!: ArtistDetail;

  constructor(
    private artistService: ArtistService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
  ) { }

  getArtist(): void {
    this.artistService.getArtist(this.id_artist).subscribe((artist) =>{
      artist.birthdate = new Date(artist.birthdate);
      this.artist = artist;
      //console.log(this.artist.artworks);
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id_artist = params.id_artist;
      this.getArtist();
    });
  }

  deleteArtist(id_artist:number){
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete the artist.',
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        this.artistService.deleteArtist(id_artist).subscribe((element)=>{
          this.router.navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/artists']);
          });
          this.toastrService.success(`Artists delete correctly`, 'Success', {
            progressBar: true
          });
        });
      }
    })
  }
}
