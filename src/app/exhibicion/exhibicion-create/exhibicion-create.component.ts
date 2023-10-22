import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, ViewChild } from'@angular/core';

import { Exhibicion } from "../exhibicion"
import { ExhibicionService } from '../exhibicion.service';

import { Sponsor } from "../../sponsor/sponsor"

@Component({
  selector: 'app-exhibicion-create',
  templateUrl: './exhibicion-create.component.html',
  styleUrls: ['./exhibicion-create.component.css']
})
export class ExhibicionCreateComponent implements OnInit {
  museumId!:string;
  isDisabled!: boolean;
  exhibicionForm!: FormGroup;
  sponsor!: Sponsor;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private exhibicionService: ExhibicionService,
    private router: Router
  ) {
    this.museumId = this.route.snapshot.paramMap.get('museumId')!;
    this.isDisabled=true;
   }

  receiveSponsor($sponsor: Sponsor) {
    this.sponsor = $sponsor;
    this.isDisabled=false;
    }

  createExhibicion(exhibicion: Exhibicion){
    console.info("The name of Sponsor is "+this.sponsor.name+" and The id of Sponsor is "+this.sponsor.id)
    this.exhibicionService.createExhibicion(exhibicion,this.museumId).subscribe(exhibicion=>{
      console.info("The exhibition was created: ", exhibicion)
      this.toastr.success("Confirmation", "Exhibition created")
      //this.exhibicionForm.reset();
      this.router.navigate(['museums/list/'+this.museumId]);
    })
  }

  cancelCreation(){
    this.exhibicionForm.reset();
  }

  updateForm(){
  this.isDisabled=true;
  this.exhibicionForm.patchValue({
    sponsor: {
      id: this.sponsor.id
    }
  });
}
  ngOnInit() {
    this.exhibicionForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.maxLength(100)]],
      sponsor: this.formBuilder.group({
        id: [""],
      }),
    });
  }

}
