/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ExhibicionDetailComponent } from './exhibicion-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibicionService } from '../exhibicion.service';
import { ExhibicionDetail } from '../exhibicion-detail';
import { RouterModule } from '@angular/router';
import { Sponsor } from 'src/app/sponsor/sponsor';

describe('ExhibicionDetailComponent', () => {
  let component: ExhibicionDetailComponent;
  let fixture: ComponentFixture<ExhibicionDetailComponent>;
  let debug: DebugElement;
  let h2: HTMLElement;
  let p: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      declarations: [ ExhibicionDetailComponent ],
      providers: [ ExhibicionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionDetailComponent);
    component = fixture.componentInstance;

    const sponsor = new Sponsor(faker.datatype.number(),
    faker.name.firstName(),
    faker.lorem.paragraph(),
    faker.internet.url());

    component.ExhibicionDetail =
      new ExhibicionDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        sponsor,
        []
      );

    fixture.detectChanges();
    debug = fixture.debugElement;
    h2 = fixture.nativeElement.querySelector('h2');
    p = fixture.nativeElement.querySelector('.text-justify');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an H2 element ', () => {
    expect(h2.textContent).toContain(
      component.ExhibicionDetail.name
    );
  });

  it('should have an P element ', () => {
    expect(p.textContent).toContain(
      component.ExhibicionDetail.description
    );
  });
});
