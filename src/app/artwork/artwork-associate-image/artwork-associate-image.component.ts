import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Artwork } from '../artwork';
import { ArtworkDetail } from '../artwork-detail';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-associate-image',
  templateUrl: './artwork-associate-image.component.html',
  styleUrls: ['./artwork-associate-image.component.css']
})
export class ArtworkAssociateImageComponent implements OnInit {

  artworks:Array<Artwork> =[];
  artworkId!: string;
  artistId!: string;
  artworkDetail!: ArtworkDetail;
  myForm!: FormGroup;
  isDisabled!: boolean;
  result: any;

    constructor(private artworkService : ArtworkService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,private route: ActivatedRoute) {
      this.artworkId = this.route.snapshot.paramMap.get('artworkId')!;
      this.artistId = this.route.snapshot.paramMap.get('artistId')!;
    }

  ngOnInit(): void {
    this.isDisabled=false;
    this.myForm = this.formBuilder.group({
      artwork: ["", [Validators.required]],
      imgAlt: ["", [Validators.required]],
      imgUrl: ["", [Validators.required]]
    });
    this.getArtwork();
  }

  getArtwork(){
    this.artworkService.getArtworks(this.artworkId, this.artistId).subscribe(obj =>{
      this.artworkDetail = obj;
      this.myForm.controls['artwork'].setValue(this.artworkDetail.name);
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
      const image = {
        source: this.myForm.controls['imgAlt'].value,
        altText : this.myForm.controls['imgUrl'].value,
        height : 300,
        width : 300
      };
      this.artworkService.artworkAssociateImage(image, this.artistId, this.artworkId).subscribe( (data) => {
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

}
