import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArtworkAssociateImageComponent } from '../artwork-associate-image/artwork-associate-image.component';
import { ArtworkDetail } from '../artwork-detail';


@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  @Input() artworkDetail!: ArtworkDetail;
  closeResult = '';

  constructor(private route: ActivatedRoute, private modalService: NgbModal) {
  }

  ngOnInit(): void{
  }

  goModalImg() {
    const modalRef = this.modalService.open(ArtworkAssociateImageComponent, {ariaLabelledBy: 'myModalLabel', backdrop: 'static'});
    modalRef.componentInstance.artworkId = this.artworkDetail.id;
    modalRef.componentInstance.artistId = this.artworkDetail.artist.id;
    modalRef.result.then((result) => {
      this.artworkDetail = result.artwork;
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
