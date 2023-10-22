/* tslint:disable:no-unused-variable */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhibicionCreateComponent } from './exhibicion-create.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ExhibicionCreateComponent', () => {
  let component: ExhibicionCreateComponent;
  let fixture: ComponentFixture<ExhibicionCreateComponent>;
  let debug: DebugElement;
  let div: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibicionCreateComponent ],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]),
      ReactiveFormsModule,ToastrModule.forRoot(),
      NgbModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
    div = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input element ', () => {
    component.exhibicionForm.controls['name'].markAsDirty();
    component.exhibicionForm.controls['name'].markAsTouched();
    fixture.detectChanges();
   div.getElementsByClassName('.alert.alert-danger.alert-dismissible.fade.show')
    expect(div.getAttribute('required')).toBeTruthy;
  });

  it('should have a form group element count', () => {
    const formElement= fixture.debugElement.nativeElement.querySelector('#formCreateExh');
    const inputElements= formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(3);
  });
});
