import { TestBed, inject } from '@angular/core/testing';

import { MainpageServiceService } from './mainpage-service.service';

describe('MainpageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainpageServiceService]
    });
  });

  it('should be created', inject([MainpageServiceService], (service: MainpageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
