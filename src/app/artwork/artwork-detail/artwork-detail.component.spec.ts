/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtworkDetailComponent } from './artwork-detail.component';
import { ArtworkDetail } from '../artwork-detail';
import faker from '@faker-js/faker';
import { Type } from '../type.enum';
import { Artist } from 'src/app/artist/artist';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('ArtworkDetailComponent', () => {
  let component: ArtworkDetailComponent;
  let fixture: ComponentFixture<ArtworkDetailComponent>;
  let debug: DebugElement;
  let img: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      declarations: [ ArtworkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDetailComponent);
    component = fixture.componentInstance;
    let artist: Artist={id:faker.datatype.number(),birthdate:new Date(),birthplace:'',image:'',name: faker.name.firstName()};

    component.artworkDetail = new ArtworkDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(2000),
      faker.lorem.paragraph(),
      faker.lorem.sentence(),
      Type.PAINTING,
      artist
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
