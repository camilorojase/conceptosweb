import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import faker from '@faker-js/faker';
import { Museum } from '../museum';
import { MuseumDetail } from '../museum-detail/museum-detail';
import { MuseumService } from '../museum.service';
import { MuseumListComponent } from './museum-list.component';

describe('MuseumListComponent', () => {
  let component: MuseumListComponent;
  let fixture: ComponentFixture<MuseumListComponent>;
  let debug: DebugElement;
  let h5: HTMLElement;
  let p: HTMLElement;
  let img: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumListComponent ],
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [MuseumService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumListComponent);
    component = fixture.componentInstance;

    component.museums = [
      new MuseumDetail(
        faker.datatype.number(5),
        faker.name.firstName(),
        faker.lorem.paragraph(),
        faker.datatype.number(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        [],
        []
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
    h5 = fixture.nativeElement.querySelector('h5');
    p = fixture.nativeElement.querySelector('p');
    img = fixture.nativeElement.querySelector('img');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an Img element ', () => {
    expect(img.getAttribute('alt')).toContain(
      component.museums[0].name
    );
  });

  it('should have an P element ', () => {
    expect(p.textContent).toContain(
      component.museums[0].name
    );
  });
});
