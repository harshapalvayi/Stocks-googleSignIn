import { TestBed } from '@angular/core/testing';

import { HttpInterceptorsService } from './http-interceptors.service';

describe('HttpInterceptorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptorsService = TestBed.get(HttpInterceptorsService);
    expect(service).toBeTruthy();
  });
});
