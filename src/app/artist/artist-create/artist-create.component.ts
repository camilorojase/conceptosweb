import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { ArtistService } from '../artist.service';
import { Artist } from '../artist';
import { City } from '../city';
import { Country } from '../country';
import { Region } from '../region';



interface State{
  id:number;
  name:string;
  country_name:string;
}

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css']
})
export class ArtistCreateComponent implements OnInit {

  artistForm!: FormGroup;
  id_artist!: number;
  artist!: Artist;
  country = '';
  city = '';
  region = '';
  dateNgb!: NgbDateStruct;

  countries: Country[] = [];
  regions: Region[] = [];
  cities: City[] = [];
  codeCountrie:string = '';

  constructor(
    private formBuilder: FormBuilder,
    private artistService: ArtistService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCountries();
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id_artist = params.id_artist;
      if(this.id_artist){
        this.getArtist();
      }else{
        let date = new Date();
        this.artist = new Artist(-1,'','',date,'assets/images/avatar.jpg');
        this.dateNgb = {day: date.getUTCDate(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear()};
        //console.log(this.dateNgb);
        this.artistForm = this.formBuilder.group({
          name: [this.artist.name, [Validators.required, Validators.minLength(5)]],
          birthdate: [this.dateNgb, [Validators.required,]],
          country: [this.country, [Validators.required]],
          region: [this.region, [Validators.required]],
          city: [this.city, [Validators.required]],
          image: [this.artist.image, [Validators.required]],
        });
      }
    });
  }

  getArtist(){
    this.artistService.getArtist(this.id_artist).subscribe((artist)=>{
      artist.birthdate = new Date(artist.birthdate);
      let aux = artist.birthplace.split(", ");
      if(aux.length===3){
        this.country = aux[2];
      }else{
        this.country = '';
      }
      this.region = aux[1];
      this.city = aux[0];
      this.artist = artist;
      let date = this.artist.birthdate;
      this.dateNgb = {day: date.getUTCDate(), month: date.getUTCMonth() + 1, year: date.getUTCFullYear()};
      console.log(this.dateNgb);
      this.artistForm = this.formBuilder.group({
        name: [this.artist.name, [Validators.required, Validators.minLength(5)]],
        birthdate: [this.dateNgb, [Validators.required,]],
        country: [this.country, [Validators.required]],
        region: [this.region, [Validators.required]],
        city: [this.city, [Validators.required]],
        image: [this.artist.image, [Validators.required]],
      });
    })
  }

  createArtist(){
    this.artistService.createArtist(this.artist).subscribe((artist)=>{
      this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([`/artists/detail/${artist.id}`]);
      });
      this.toastrService.success(`Artist ${artist.name} create correctly`, 'Success', {
        progressBar: true
      });
    })
  }

  editArtist(){
    this.artistService.editArtist(this.artist, this.id_artist).subscribe((artist)=>{
      this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([`/artists/detail/${artist.id}`]);
      });
      this.toastrService.success(`Artist ${artist.name} edit correctly`, 'Success', {
        progressBar: true
      });
    })
  }

  submitArtist(){
    let dateaux = this.artistForm.controls.birthdate.value;
    this.artist = this.artistForm.value;
    this.artist.birthdate = new Date();
    this.artist.birthdate.setUTCFullYear(dateaux.year);
    this.artist.birthdate.setUTCMonth(dateaux.month-1);
    this.artist.birthdate.setUTCDate(dateaux.day);
    console.log('artist', this.artist.birthdate);
    console.log('date', dateaux);
    this.artist.birthplace = `${this.artistForm.controls.city.value}, ${this.artistForm.controls.region.value}, ${this.artistForm.controls.country.value}`;
    if(!this.id_artist){
      this.createArtist();
    }else{
      this.editArtist();
    }
  }

  cancel(){
    //console.log(this.id_artist);
    if(!this.id_artist){
      this.router.navigateByUrl(`/artists`);
    }else{
      this.router.navigateByUrl(`/artists/detail/${this.id_artist}`);
    }
  }

  getCities(){
    let codeRegion = this.artistForm.controls['region'].value;
    //console.log(codeRegion);
    this.artistService.getCities(this.codeCountrie, codeRegion).subscribe((cities)=>{
      this.cities = cities;
    })
  }

  getCountries(){
    this.artistService.getCountries().subscribe((countries)=>{
      this.countries = countries;
      if(this.id_artist){
        this.getRegions();
        this.getCities();
      }
    })
  }

  getRegions(){
    this.cities = [];
    this.regions = [];
    let name = this.artistForm.controls['country'].value;
    this.codeCountrie = this.countries.find(country => country.name === name)?.code!;
    //console.log(this.codeCountrie);
    this.artistService.getRegions(this.codeCountrie).subscribe((regions)=>{
      this.regions = regions;
    })
  }
}
