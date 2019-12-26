import { TestBed } from '@angular/core/testing';

import { StocksService } from './stocks.service';
import {FormBuilder, FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('StocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [FormsModule, HttpClientTestingModule],
    providers: [FormBuilder]
  }));

  it('should be created', () => {
    const service: StocksService = TestBed.get(StocksService);
    expect(service).toBeTruthy();
  });
});
