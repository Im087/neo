import { TestBed } from '@angular/core/testing';

import { NeoFeedService } from './neo-feed.service';

describe('NeoFeedService', () => {
  let service: NeoFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeoFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
