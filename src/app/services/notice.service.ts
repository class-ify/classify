import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Notice } from '../models/notice';

@Injectable()
export class NoticeService {

  constructor(
      private http: Http) {
  }

  getNotice(): Observable<Notice[]> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('/api/v1/notices', options)
          .map((response: Response) => response.json());
  }



  addNotice(data:any):Observable<boolean>{
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/notice/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }


}
