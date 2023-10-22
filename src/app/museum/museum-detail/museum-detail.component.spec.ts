import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import faker from '@faker-js/faker';
import { Exhibicion } from 'src/app/exhibicion/exhibicion';
import { Sponsor } from 'src/app/sponsor/sponsor';
import { MuseumDetail } from './museum-detail';
import { MuseumDetailComponent } from './museum-detail.component';

describe('MuseumDetailComponent', () => {
  let component: MuseumDetailComponent;
  let fixture: ComponentFixture<MuseumDetailComponent>;
  let debug: DebugElement;
  let img: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      declarations: [ MuseumDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumDetailComponent);
    component = fixture.componentInstance;
    img = fixture.nativeElement.querySelector('img');

    const sponsor = new Sponsor(faker.datatype.number(),
    faker.name.firstName(),
    faker.lorem.paragraph(),
    faker.internet.url());

    let exhibitions = [
      new Exhibicion(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.paragraph(),
        sponsor),
      new Exhibicion(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.lorem.paragraph(),
        sponsor)
      ];

    component.museumDetail = new MuseumDetail(
        faker.datatype.number(5),
        faker.name.firstName(),
        faker.lorem.paragraph(),
        faker.datatype.number(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        [],
        exhibitions
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element ', () => {
    expect(img.getAttribute('alt')).toContain(
      component.museumDetail.name
    );
  });
});
