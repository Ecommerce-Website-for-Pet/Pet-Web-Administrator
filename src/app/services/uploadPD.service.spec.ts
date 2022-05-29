import { TestBed } from '@angular/core/testing';

import { UploadPDService } from './uploadPD';

describe('ExampleService', () => {
  let service: UploadPDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadPDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
