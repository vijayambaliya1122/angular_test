import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  // let service = {
  //   getById: () => {}
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule , RouterTestingModule],
      providers: [HomeService]
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should fetch get as an Observable`, (inject([HttpTestingController, HomeService],
    (httpClient: HttpTestingController, homeSvc: HomeService) => {
      service.getById().subscribe((res: any) => {
        console.log('result===='); 
        const result = res;
        expect(result.length).toEqual(11);
      });
    })));
  
});
