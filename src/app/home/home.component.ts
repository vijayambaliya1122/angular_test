import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,
              private homeService : HomeService) { }
  isData:any;
  dataArray = [{
    id:'',
    title: ''
  }];

  ngOnInit(): void {
   this.getAllData();
  }

  sendRequest(): void {
    if (this.dataArray.filter(id => id.id === this.isData).length > 0) {
      this.router.navigate(['/detail', this.isData]);
    } else {
      alert('Record Does Not Exist')
    }
  }

  getAllData(): void {
    this.homeService.getById().subscribe(res => {
      console.log(res);
      this.dataArray = res
    })
  }


}
