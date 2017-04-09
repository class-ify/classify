import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Schedule } from '../models/schedule';

@Injectable()
export class ScheduleService {

  constructor(
      private http: Http) {
  }

  getSchedule(): Observable<Schedule[]> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('/api/v1/schedule', options)
          .map((response: Response) => response.json());
  }
}
