import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { ExhibicionAssociateArtworkComponent } from './exhibicion-associate-artwork.component';

describe('ExhibicionAssociateArtworkComponent', () => {
  let component: ExhibicionAssociateArtworkComponent;
  let fixture: ComponentFixture<ExhibicionAssociateArtworkComponent>;
  let debug: DebugElement;
  let div: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]),
      ReactiveFormsModule,ToastrModule.forRoot(),
      NgbModule],
      declarations: [ ExhibicionAssociateArtworkComponent ],
      providers: [
        NgbActiveModal,
        NgbModal
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionAssociateArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
    div = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input element ', () => {
    component.myForm.controls['artist'].markAsDirty();
    component.myForm.controls['artist'].markAsTouched();
    fixture.detectChanges();
   div.getElementsByClassName('.alert.alert-danger.alert-dismissible.fade.show')
    expect(div.getAttribute('required')).toBeTruthy;
  });
});
