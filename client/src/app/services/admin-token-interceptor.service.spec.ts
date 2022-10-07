import { TestBed } from '@angular/core/testing';

import { AdminTokenInterceptorService } from './admin-token-interceptor.service';

describe('AdminTokenInterceptorService', () => {
  let service: AdminTokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
