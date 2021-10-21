import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailService } from './detail.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailService', () => {
  let service: DetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule , RouterTestingModule ],
      providers: [DetailService],
    });
    service = TestBed.inject(DetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
