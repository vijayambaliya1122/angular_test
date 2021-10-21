import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dataObj ={
    userId:'',
    id: '',
    title: '',
    body: ''
  }

  constructor(private route:ActivatedRoute,
              private detailService : DetailService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAllData(id);
  }

  getAllData(id : any): void {
    this.detailService.getById(id).subscribe(res => {
      this.dataObj = res
    })
  }

}
