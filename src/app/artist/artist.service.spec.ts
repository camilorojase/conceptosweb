/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistService } from './artist.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Artist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistService]
    });
  });

  it('should ...', inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
  }));
});
