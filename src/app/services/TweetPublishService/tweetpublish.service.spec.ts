import { TestBed } from '@angular/core/testing';

import { TweetpublishService } from './tweetpublish.service';

describe('TweetpublishService', () => {
  let service: TweetpublishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetpublishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
