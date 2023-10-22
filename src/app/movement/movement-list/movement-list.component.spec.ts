/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { faker } from '@faker-js/faker';

import { MovementListComponent } from './movement-list.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { Movement } from '../movement';
import { ArtistDetail } from 'src/app/artist/artist-detail';


describe('MovementListComponent', () => {
  let component: MovementListComponent;
  let fixture: ComponentFixture<MovementListComponent>;
  let debug: DebugElement;
  let tbody: HTMLElement;
  let button: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), ToastrModule.forRoot()],
      declarations: [ MovementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementListComponent);
    component = fixture.componentInstance;

    let movement1 = new Movement(
      faker.datatype.number(),
      faker.name.jobArea(),
      faker.name.jobDescriptor(),
      faker.address.country(),
      faker.lorem.sentence(),
    );
    let movement2 = new Movement(
      faker.datatype.number(),
      faker.name.jobArea(),
      faker.name.jobDescriptor(),
      faker.address.country(),
      faker.lorem.sentence(),
    );
    let movement3 = new Movement(
      faker.datatype.number(),
      faker.name.jobArea(),
      faker.name.jobDescriptor(),
      faker.address.country(),
      faker.lorem.sentence(),
    );

    component.id_artist = 1;

    component.artist = new ArtistDetail(
      1,
      faker.name.firstName(),
      faker.lorem.lines(),
      faker.date.past(),
      faker.image.imageUrl(),
      [],
      [
        movement1
      ]
    );

    component.movements = [
      movement1,
      movement2,
      movement3
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;

    tbody = fixture.nativeElement.querySelector('tbody');
    button = fixture.nativeElement.querySelector('button.btn-danger');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has three movements', () => {
    expect(tbody.childElementCount).toEqual(3);
  });

  it('should exist a btn-danger button', () => {
    expect(button).toBeTruthy();
  });




});
