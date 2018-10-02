import { TestBed, inject } from '@angular/core/testing';

import { SSOService } from './sso.service';

describe('SsoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SSOService]
    });
  });

  it('should be created', inject([SSOService], (service: SSOService) => {
    expect(service).toBeTruthy();
  }));
});
