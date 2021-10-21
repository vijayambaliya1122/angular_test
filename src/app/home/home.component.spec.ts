import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async () => {
 
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule , HttpClientModule],
      declarations: [ HomeComponent ],
      providers: [HomeService]
    })
    .compileComponents();
   
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
