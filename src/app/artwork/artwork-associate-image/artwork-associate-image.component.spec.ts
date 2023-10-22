import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { ArtworkAssociateImageComponent } from './artwork-associate-image.component';

describe('ArtworkAssociateImageComponent', () => {
  let component: ArtworkAssociateImageComponent;
  let fixture: ComponentFixture<ArtworkAssociateImageComponent>;
  let debug: DebugElement;
  let div: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkAssociateImageComponent ],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]),
      ReactiveFormsModule,ToastrModule.forRoot(),
      NgbModule],
      providers: [
        NgbActiveModal,
        NgbModal
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkAssociateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
    div = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input element ', () => {
    component.myForm.controls['imgAlt'].markAsDirty();
    component.myForm.controls['imgAlt'].markAsTouched();
    fixture.detectChanges();
   div.getElementsByClassName('.alert.alert-danger.alert-dismissible.fade.show')
    expect(div.getAttribute('required')).toBeTruthy;
  });
});
