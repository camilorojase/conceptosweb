/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { faker } from '@faker-js/faker';


import { ArtistDetailComponent } from './artist-detail.component';
import { Movement } from 'src/app/movement/movement';
import { Artwork } from 'src/app/artwork/artwork'
import { Type } from 'src/app/artwork/type.enum';
import { Artist } from '../artist';
import { ArtistDetail } from '../artist-detail';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

describe('ArtistDetailComponent', () => {
  let component: ArtistDetailComponent;
  let fixture: ComponentFixture<ArtistDetailComponent>;
  let debug: DebugElement;
  let acordionMovements: HTMLElement;
  let listArtworks: HTMLElement;
  let nombreArtist: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), ToastrModule.forRoot()],
      declarations: [ ArtistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailComponent);
    component = fixture.componentInstance;

    let artist: Artist={
      id:faker.datatype.number(),
      birthdate:new Date(),
      birthplace:'',
      image:'',
      name: faker.name.firstName()
    };

    let artworks: Artwork[] = [
      new Artwork(
        faker.datatype.number(),
        faker.commerce.productName(),
        faker.datatype.number(),
        faker.lorem.paragraph(),
        faker.lorem.sentence(),
        Type.PAINTING,
        artist
      ),
      new Artwork(
        faker.datatype.number(),
        faker.commerce.productName(),
        faker.datatype.number(),
        faker.lorem.paragraph(),
        faker.lorem.sentence(),
        Type.SCULPTURE,
        artist
      ),
      new Artwork(
        faker.datatype.number(),
        faker.commerce.productName(),
        faker.datatype.number(),
        faker.lorem.paragraph(),
        faker.lorem.sentence(),
        Type.PAINTING,
        artist
      )
    ];

    let movements: Movement[] = [
      new Movement(
        faker.datatype.number(),
        faker.commerce.productName(),
        faker.lorem.paragraph(),
        faker.address.country(),
        faker.lorem.lines()
      ),
      new Movement(
        faker.datatype.number(),
        faker.commerce.productName(),
        faker.lorem.paragraph(),
        faker.address.country(),
        faker.lorem.lines()
      )
    ];

    component.artist = new ArtistDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.lorem.lines(),
      faker.date.past(),
      faker.image.imageUrl(),
      artworks,
      movements
    );

    fixture.detectChanges();
    debug = fixture.debugElement;

    acordionMovements = fixture.nativeElement.querySelector('#accordionMovements');
    listArtworks = fixture.nativeElement.querySelector('#accordionArtworks');
    nombreArtist = fixture.nativeElement.querySelector('#headerlistdetail')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has all movementes', () => {
    expect(acordionMovements.childElementCount).toEqual(component.artist.movements.length)
  });

  it('should has all artworks', () => {
    expect(listArtworks.childElementCount).toEqual(component.artist.artworks.length)
  });

  it('should head has artist name', () => {
    expect(nombreArtist.textContent).toEqual(component.artist.name);
  });

});
