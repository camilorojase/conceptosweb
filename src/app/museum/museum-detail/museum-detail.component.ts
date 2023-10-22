import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';
import { MuseumDetail } from './museum-detail';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museumId!: string;
  @Input() museumDetail!: MuseumDetail;

  constructor(private route: ActivatedRoute, private museumService: MuseumService) { }

  ngOnInit(): void {
    if(this.museumDetail === undefined){
      this.museumId = this.route.snapshot.paramMap.get('id')!;
      if (this.museumId) {
        this.getMuseum();
      }
    }
  }

  getMuseum(){
    this.museumService.getMuseum(this.museumId).subscribe(obj =>{
      this.museumDetail = obj;
    })
  }
}
