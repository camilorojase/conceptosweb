import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../type.enum'





@Component({
  selector: 'app-artwork-create',
  templateUrl: './artwork-create.component.html',
  styleUrls: ['./artwork-create.component.css']
})
export class ArtworkCreateComponent implements OnInit {
  artistId!:string;
  artworkForm!: FormGroup;
  typelist = Object.keys(Type);


  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artworkService: ArtworkService,
    private router: Router
    )
    {

      this.artistId = this.route.snapshot.paramMap.get('artistid')!;
    }

  createArtWork(artwork: Artwork[]){
    this.artworkService.createArtWork(artwork,this.artistId).subscribe(artwork=>{
      console.info("The artwork was created: ", artwork)
      this.toastr.success("Confirmation", "artwork created")
    //  this.artworkForm.reset();
      this.router.navigate(['artists/']);
    });
  }

  cancelCreation(){
    this.artworkForm.reset();
 }


 ngOnInit( ) {
   this.artworkForm = this.formBuilder.group({
    name : ["", [Validators.required, Validators.minLength(2)]],
    year: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4)]  ],
    description: ["", [Validators.required, Validators.maxLength(100)]],
    short_description:  ["", [Validators.required, Validators.maxLength(20)]],
    artist: this.artistId,
    type: "Painting"
   }
   )


 }



}





