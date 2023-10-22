import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { Exhibicion } from '../exhibicion';
import { ExhibicionDetail } from '../exhibicion-detail';
import { ExhibicionService } from '../exhibicion.service';

@Component({
  selector: 'app-exhibicion-list',
  templateUrl: './exhibicion-list.component.html',
  styleUrls: ['./exhibicion-list.component.css']
})
export class ExhibicionListComponent implements OnInit {
  public exhibiciones: Array<ExhibicionDetail> = [];
  selected: Boolean = false;
  selectedExhibicion!: ExhibicionDetail;
  exhibicionId!: string;
  museumId!: string;

  constructor(private exhibicionService: ExhibicionService, private sharedService: SharedService, private route: ActivatedRoute) {
    this.sharedService.setSite('Exhibitions');
    this.museumId = this.route.snapshot.paramMap.get('museumId')!;
  }

  getExhibiciones() {
    this.exhibicionService.getExhibiciones(this.museumId).subscribe(exhibiciones => {
      this.exhibiciones = exhibiciones;
      if(this.route.snapshot.paramMap.get('id')){
        this.exhibicionId = this.route.snapshot.paramMap.get('id')!;
        this.selectedExhibicion =this.exhibiciones.find(x => x.id == Number(this.exhibicionId))!;
      }else{
        this.selectedExhibicion =this.exhibiciones[0];
      }
    this.selected = true;
    });
  }

  onSelected(exhibicion: ExhibicionDetail): void {
    this.selected = true;
    this.selectedExhibicion = exhibicion;
  }

  ngOnInit() {
    this.getExhibiciones();
  }
}
