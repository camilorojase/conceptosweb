import { Component, Output, OnInit,  EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Sponsor } from "../sponsor"
import { SponsorService } from '../sponsor.service';

@Component({
  selector: 'app-sponsor-create',
  templateUrl: './sponsor-create.component.html',
  styleUrls: ['./sponsor-create.component.css']
})
export class SponsorCreateComponent implements OnInit {
  sponsorForm!: FormGroup;

  @Output() sponsorEmitter = new EventEmitter <Sponsor> ();

  PostData(sponsor: Sponsor) {
      this.sponsorEmitter.emit(sponsor);
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private sponsorService: SponsorService
  ) { }

  createSponsor(sponsor: Sponsor){
    this.sponsorService.createSponsor(sponsor).subscribe(sponsorResponse=>{
      console.info("The sponsor was created: ", sponsorResponse)
      this.PostData(sponsorResponse)
      this.toastr.success("Confirmation", "Sponsor created")
      this.sponsorForm.reset();
    })
  }

  cancelCreation(){
    this.sponsorForm.reset();
  }

  ngOnInit() {
    this.sponsorForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.maxLength(100)]],
      website: ["", [Validators.required, Validators.minLength(10)]]
    })
  }

}
