import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MuseumCreateComponent } from './museum-create.component';

describe('MuseumCreateComponent', () => {
  let component: MuseumCreateComponent;
  let fixture: ComponentFixture<MuseumCreateComponent>;
  let debug: DebugElement;
  let div: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([]),
      ReactiveFormsModule,ToastrModule.forRoot(),
      NgbModule],
      declarations: [ MuseumCreateComponent ],
      providers: [
        NgbActiveModal,
        NgbModal
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
    div = fixture.nativeElement.querySelector('div');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input element ', () => {
    component.museumForm.controls['name'].markAsDirty();
    component.museumForm.controls['name'].markAsTouched();
    fixture.detectChanges();
   div.getElementsByClassName('.alert.alert-danger.alert-dismissible.fade.show')
    expect(div.getAttribute('required')).toBeTruthy;
  });
});
