import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Topic } from '../models/topic';


@Injectable()
export class TopicService {

  constructor(
      private http: Http) {
  }

  getUpdatedTopic(): Observable<Topic[]> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('/api/v1/topic/completed', options)
          .map((response: Response) => response.json());
  }



  updateTopic(data:any):Observable<boolean>{
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/topic/completed/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
}
}
