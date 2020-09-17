import { TestBed } from '@angular/core/testing';

import { BathroomEventService } from './bathroom-event.service';

describe('BathroomEventService', () => {
  let service: BathroomEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BathroomEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
