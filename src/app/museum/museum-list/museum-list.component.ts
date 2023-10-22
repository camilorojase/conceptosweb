import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/shared/shared.service';
import { Museum } from '../museum';
import { MuseumCreateComponent } from '../museum-create/museum-create.component';
import { MuseumDetail } from '../museum-detail/museum-detail';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  museums: Array<MuseumDetail> = [];
  selectedMuseum!: MuseumDetail;
  selected: Boolean = false;
  museumId!: string;
  closeResult = '';

  constructor(private museumService : MuseumService, private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal) {
    this.sharedService.setSite('Museums');
  }

  ngOnInit(): void {
    this.getMuseums();
  }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe(museums  =>{
      this.museums = museums;
      if(this.route.snapshot.paramMap.get('id')){
        this.museumId = this.route.snapshot.paramMap.get('id')!;
        this.selectedMuseum =this.museums.find(x => x.id == Number(this.museumId))!;
      }else{
        this.selectedMuseum =this.museums[0];
      }
    this.selected = true;
    });
  }

  onSelected(museum: MuseumDetail): void {
    this.selected = true;
    this.selectedMuseum = museum;
  }

  goAddMuseum() {
    this.modalService.open(MuseumCreateComponent, {ariaLabelledBy: 'myModalLabel',  backdrop: 'static' }).result.then((result) => {
      this.getMuseums();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
/*
  openModal() {
    // Open modal form component
    const position: Position,
    const formMode: string,
    const isAddNew: boolean
    const modalRef = this.modalService.open(ModalFormComponent);
    // handle result passing back from modal form component
    modalRef.result
      .then((result: FormResult) => {
        if (result) {
          log.debug('openModal', result);

          if (result.crudType == 'c') {
            if (result.status) {
              this.refreshPage();
              // toaster for CRUD\Create
              this.displayToaster('Confirmation', 'Data is saved');
            }
          }
          if (result.crudType == '') {
              // toaster for cancel
              this.displayToaster('Confirmation', 'Form is cancel');
          }
        }
      })
      .catch(() => {
        // user click outside of the modal form
        log.debug('Form: ', 'Cancel');
      });
  }*/

}
