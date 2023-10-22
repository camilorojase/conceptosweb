/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtworkService } from './artwork.service';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('Service: Artwork', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtworkService]
    });
  });

  it('should ...', inject([ArtworkService], (service: ArtworkService) => {
    expect(service).toBeTruthy();
  }));
});
