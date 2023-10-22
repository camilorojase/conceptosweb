import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Movement } from '../movement';
import { MovementService } from '../movement.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Country } from 'src/app/artist/country';
import { ArtistService } from 'src/app/artist/artist.service';

@Component({
  selector: 'app-movement-create',
  templateUrl: './movement-create.component.html',
  styleUrls: ['./movement-create.component.css']
})
export class MovementCreateComponent implements OnInit {

  movementForm!: FormGroup
  movement!: Movement;
  id_artist!: number;
  id_movement!: number;
  countries: Country[] = [];

  constructor(
    private artistService: ArtistService,
    private formBuilder: FormBuilder,
    private movementService: MovementService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCountries();
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id_artist = params.id_artist;
      this.id_movement = params.id_movement;
      if(this.id_movement){
        this.getMovement();
      }else{
        this.movement = new Movement(-1,'','','','');
        this.movementForm = this.formBuilder.group({
          name: [this.movement.name, [Validators.required, Validators.minLength(5)]],
          description: [this.movement.description, [Validators.required, Validators.minLength(100)]],
          countryOfOrigin: [this.movement.countryOfOrigin, [Validators.required]],
          activeYears: [this.movement.activeYears, [Validators.required, Validators.minLength(5)]],
        });
      }
    });

  }

  getMovement(){
    this.movementService.getMovement(this.id_movement).subscribe((movement)=>{
      this.movement = movement;
      //console.log('movement', this.movement)
      this.movementForm = this.formBuilder.group({
        name: [this.movement.name, [Validators.required, Validators.minLength(5)]],
        description: [this.movement.description, [Validators.required, Validators.minLength(100)]],
        countryOfOrigin: [this.movement.countryOfOrigin, [Validators.required]],
        activeYears: [this.movement.activeYears, [Validators.required, Validators.minLength(5)]],
      });
    });
  }

  createMovement(){
    this.movement = this.movementForm.value;
    this.movementService.createMovement(this.movement).subscribe((movement)=>{
      this.movementService.addMovementToArtist(this.id_artist, movement.id).subscribe((artist)=>{
        this.router.navigateByUrl(`/artists/detail/${this.id_artist}`)
        this.toastrService.success(`Movment ${movement.name} create and add to ${artist.name} correctly`, 'Success', {
          progressBar: true
        });
      })
    });
  }

  editMovement(){
    this.movement = this.movementForm.value;
    this.movementService.editMovement(this.movement, this.id_movement).subscribe((movement)=>{
      if(this.router.url.search('add')==-1){
        this.router.navigateByUrl(`/artists/detail/${this.id_artist}`)
      }else{
        this.router.navigateByUrl(`/artists/addMovement/${this.id_artist}`)
      }
      this.toastrService.success(`Movment ${movement.name} update correctly`, 'Success', {
        progressBar: true
      });
    });
  }

  submitMovement(){
    if(this.id_movement){
      this.editMovement();
    }else{
      this.createMovement();
    }
  }

  cancel(){
    if(this.router.url.search('add')==-1){
      this.router.navigateByUrl(`/artists/detail/${this.id_artist}`)
    }else{
      this.router.navigateByUrl(`/artists/addMovement/${this.id_artist}`)
    }
  }

  getCountries(){
    this.artistService.getCountries().subscribe((countries)=>{
      this.countries=countries
    })
  }


}
