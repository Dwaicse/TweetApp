import { TestBed } from '@angular/core/testing';

import { TweetDataServiceService } from './tweet-data-service.service';

describe('TweetDataServiceService', () => {
  let service: TweetDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
