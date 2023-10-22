import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Movement } from '../movement';
import { MovementService } from '../movement.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ArtistService } from 'src/app/artist/artist.service';
import Swal from 'sweetalert2'
import { ArtistDetail } from 'src/app/artist/artist-detail';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.css']
})
export class MovementListComponent implements OnInit {


  movements: Movement[]=[];
  artist!: ArtistDetail;
  id_artist!: number;

  constructor(
    private movementService: MovementService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id_artist = params.id_artist;
      this.getArtist();
      this.getMovements();
    });
  }

  getMovements(){
    this.movementService.getMovements().subscribe((movements)=>{
      this.movements =  movements;
    });
  }

  getArtist(){
    this.artistService.getArtist(this.id_artist).subscribe((artist)=>{
      this.artist = artist;
    });
  }

  addMovement(id_movement: number){
    this.movementService.addMovementToArtist(this.id_artist, id_movement).subscribe((artist)=>{
      this.getArtist();
      this.toastrService.success(`Movment add correctly to artist ${artist.name}`, 'Success', {
        progressBar: true
      });
    });
  }

  delMovement(id_movement:number){
    this.movementService.delMovementToArtist(this.id_artist, id_movement).subscribe((artist)=>{
      this.getArtist();
      this.toastrService.success(`Movment remove correctly to artist ${this.artist.name}`, 'Success', {
        progressBar: true
      });
    });
  }

  deleteMovement(id_movement:number){
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure to delete the movement.',
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      denyButtonText: `Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        this.movementService.deleteMovement(id_movement).subscribe((element)=>{
          this.getMovements();
          this.toastrService.success(`Movment delete correctly`, 'Success', {
            progressBar: true
          });
        });
      }
    })
  }

  search(id_movement: number): boolean{
    let flag = false
    this.artist.movements.forEach(movement => {
      if(movement.id === id_movement){
        flag = true;
        //console.log(movement)
      }
    });
    return flag;
  }




}
