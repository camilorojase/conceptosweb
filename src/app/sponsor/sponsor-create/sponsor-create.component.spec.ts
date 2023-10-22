/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SponsorCreateComponent } from './sponsor-create.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

describe('SponsorCreateComponent', () => {
  let component: SponsorCreateComponent;
  let fixture: ComponentFixture<SponsorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]),ReactiveFormsModule, ToastrModule.forRoot() ],
      declarations: [ SponsorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form group element count', () => {
    const formElement= fixture.debugElement.nativeElement.querySelector('#formCreateSps');
    const inputElements= formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(3);
  });
});
