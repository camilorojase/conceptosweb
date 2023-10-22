/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { faker } from '@faker-js/faker';

import { ArtistListComponent } from './artist-list.component';
import { Artist } from '../artist';
import { RouterModule } from '@angular/router';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;
  let debug: DebugElement;
  let img: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      declarations: [ ArtistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;

    component.artists = [
      new Artist(
        1,
        faker.name.firstName(),
        faker.lorem.lines(),
        faker.date.past(),
        faker.image.imageUrl(),
      ),
      new Artist(
        2,
        faker.name.firstName(),
        faker.lorem.lines(),
        faker.date.past(),
        faker.image.imageUrl(),
      ),
      new Artist(
        3,
        faker.name.firstName(),
        faker.lorem.lines(),
        faker.date.past(),
        faker.image.imageUrl()
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;

    img = fixture.nativeElement.querySelector('img');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Img element ', () => {
    expect(img.getAttribute('alt')).toContain(
      component.artists[0].name
    );
  });

  it("should exist artist with correct id", () => {
    expect(component.artists[0].id).toEqual(1);
  });

});
