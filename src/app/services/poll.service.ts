import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Poll } from '../models/poll';

@Injectable()
export class PollService {

  constructor(
      private http: Http) {
  }

  getPoll(): Observable<Poll[]> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('/api/v1/polls', options)
          .map((response: Response) => response.json());
  }



  addPoll(data:any):Observable<boolean>{
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/poll/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }


}
