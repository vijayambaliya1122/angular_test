import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiconstants } from 'src/assets/ApiConstant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getById(): Observable<any>{
    return this.http.get('http://localhost:3000/posts')
  }
}
