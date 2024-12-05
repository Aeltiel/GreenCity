import { TestBed } from '@angular/core/testing';

import { GreenSpaceSService } from './green-space-s.service';

describe('GreenSpaceSService', () => {
  let service: GreenSpaceSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenSpaceSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
