/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { faker } from '@faker-js/faker';

import { MovementCreateComponent } from './movement-create.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { Movement } from '../movement';
import { Country } from 'src/app/artist/country';

describe('MovementCreateComponent', () => {
  let component: MovementCreateComponent;
  let fixture: ComponentFixture<MovementCreateComponent>;
  let debug: DebugElement;
  let title: HTMLElement;
  let button: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), ReactiveFormsModule, ToastrModule.forRoot()],
      declarations: [ MovementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementCreateComponent);
    component = fixture.componentInstance;

    component.id_artist = 1;

    component.countries = [
      new Country(
        'ge',
        'Germany'
      ),
      new Country(
        'fa',
        'France'
      ),
      new Country(
        'co',
        'Colombia'
      )
    ]

    component.movement = new Movement(
      faker.datatype.number(),
      faker.name.jobArea(),
      faker.name.jobDescriptor(),
      'Colombia',
      faker.lorem.sentence(),
    );

    fixture.detectChanges();
    debug = fixture.debugElement;

    title = fixture.nativeElement.querySelector('span.noh5');
    button = fixture.nativeElement.querySelector('button.btn-primary');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has a title create', () => {
    expect(title.textContent).toContain('Create Movement');
  });

  it('should has a title create', () => {
    expect(button.textContent).toContain('Create');
  });
});
