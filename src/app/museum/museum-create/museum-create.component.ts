import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../museum.service';
import { Museum } from '../museum';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-museum-create',
  templateUrl: './museum-create.component.html',
  styleUrls: ['./museum-create.component.css']
})
export class MuseumCreateComponent implements OnInit {

  museumId!:string;
  isDisabled!: boolean;
  museumForm!: FormGroup;
  result: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museumService: MuseumService,
    public activeModal: NgbActiveModal) {
      //this.museumId = this.route.snapshot.paramMap.get('museumId')!;
      this.isDisabled=false;
    }

    ngOnInit() {
      this.museumForm = this.formBuilder.group({
        name: ["", [Validators.required, Validators.minLength(2)]],
        description: ["", [Validators.required, Validators.maxLength(300)]],
        address: ["", [Validators.required, Validators.maxLength(100)]],
        city: ["", [Validators.required, Validators.maxLength(50)]],
        image: ["", [Validators.required, Validators.minLength(11)]]
      });
    }

  onCancel() {
    this.museumForm.reset();
    this.activeModal.close(null);
   }

  updateForm(){
    this.isDisabled=true;
  }

  createMuseum(museum: Museum){
    if(!this.museumForm.invalid) {
      this.museumService.createMuseum(museum).subscribe( (data) => {
        console.log("The museum was created: ", data)
        this.toastr.success("Confirmation", "Museum created")
        this.result = data;
        this.activeModal.close(this.result);      },
      (error) => {
        console.log(error);
      });
   }
  }

  onCreate(){
    this.createMuseum(this.museumForm.value);
  }
}
