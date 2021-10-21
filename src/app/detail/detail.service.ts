import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Apiconstants } from 'src/assets/ApiConstant';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  getPostAllData(): Observable<any>{
    return this.http.get('http://localhost:3000/posts')
  }

  getById(id : any): Observable<any>{
    return this.http.get('http://localhost:3000/posts/' + id)
  }
}
