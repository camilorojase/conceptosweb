import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExhibicionAssociateArtworkComponent } from '../exhibicion-associate-artwork/exhibicion-associate-artwork.component';
import { ExhibicionDetail } from '../exhibicion-detail';
import { ExhibicionService } from '../exhibicion.service';

@Component({
  selector: 'app-exhibicion-detail',
  templateUrl: './exhibicion-detail.component.html',
  styleUrls: ['./exhibicion-detail.component.css']
})
export class ExhibicionDetailComponent implements OnInit {

  exhibicionId!: string;
  museumId!:string;
  @Input() ExhibicionDetail!: ExhibicionDetail;
  closeResult = '';

  constructor(private route: ActivatedRoute, private exhibicionService: ExhibicionService,
    private modalService: NgbModal) {
    this.museumId = this.route.snapshot.paramMap.get('museumId')!;
  }

  ngOnInit() {
    if(this.ExhibicionDetail === undefined){
      this.exhibicionId = this.route.snapshot.paramMap.get('id')!
      if (this.exhibicionId) {
        this.getExhibicion();
      }
    }
  }

  getExhibicion(){
    this.exhibicionService.getExhibicion(this.exhibicionId, this.museumId).subscribe(obj =>{
      this.ExhibicionDetail = obj;
    })
  }

  goModalAssociation() {
    const modalRef = this.modalService.open(ExhibicionAssociateArtworkComponent, {ariaLabelledBy: 'myModalLabel', backdrop: 'static'});
    modalRef.componentInstance.exhibitionId = this.ExhibicionDetail.id;
    modalRef.componentInstance.museumId = this.museumId;
    modalRef.result.then((result) => {
      this.exhibicionId = this.ExhibicionDetail.id.toString();
      this.getExhibicion();
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

}
