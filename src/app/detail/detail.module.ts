import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailService } from './detail.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  providers:[DetailService]
})
export class DetailModule { }
