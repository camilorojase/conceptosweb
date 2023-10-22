/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ExhibicionListComponent } from './exhibicion-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ExhibicionService } from '../exhibicion.service';
import { ExhibicionDetail } from '../exhibicion-detail';
import { RouterModule } from '@angular/router';
import { Sponsor } from 'src/app/sponsor/sponsor';

describe('ExhibicionListComponent', () => {
  let component: ExhibicionListComponent;
  let fixture: ComponentFixture<ExhibicionListComponent>;
  let debug: DebugElement;
  let h5: HTMLElement;
  let p: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([])],
      declarations: [ ExhibicionListComponent ],
      providers: [ ExhibicionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionListComponent);
    component = fixture.componentInstance;

    const sponsor = new Sponsor(faker.datatype.number(),
    faker.name.firstName(),
    faker.lorem.paragraph(),
    faker.internet.url());

    component.exhibiciones = [
      new ExhibicionDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        sponsor,
        []
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
    h5 = fixture.nativeElement.querySelector('h5');
    p = fixture.nativeElement.querySelector('.text-justify');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an P element ', () => {
    expect(p.textContent).toContain(
      component.exhibiciones[0].name
    );
  });

/*  it('should have an P element ', () => {
    expect(p.textContent).toContain(
      component.exhibiciones[0].description
    );
  });*/
});
