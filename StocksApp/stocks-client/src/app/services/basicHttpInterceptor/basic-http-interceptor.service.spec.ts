import { TestBed } from '@angular/core/testing';

import { BasicHttpInterceptorService } from './basic-http-interceptor.service';

describe('BasicHttpInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicHttpInterceptorService = TestBed.get(BasicHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
