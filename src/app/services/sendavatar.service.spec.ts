import { TestBed } from '@angular/core/testing';

import { SendavatarService } from './sendavatar.service';

describe('SendavatarService', () => {
  let service: SendavatarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendavatarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
