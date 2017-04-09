import { Component, OnInit } from '@angular/core';
import {UiInitService} from '../../ui-init.service';
import { LoginLogoutService } from '../../services/login-logout.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TestSchedules } from '../../models/testschedules';

@Component({
  selector: 'app-test-schedule',
  templateUrl: './test-schedule.component.html',
  styleUrls: ['./test-schedule.component.css'],
  providers:[UiInitService]
})
export class TestScheduleComponent implements OnInit {
testschedules: TestSchedules[] = [];

  constructor(private UiInitService:UiInitService,
  private http:Http,
  private loginLogoutService: LoginLogoutService) { }

  ngOnInit() {
      this.UiInitService.setup();
      this.getTestSchedule()
        .subscribe(
          testschedules => {
            this.testschedules=testschedules;
          }
        );
  }

  getTestSchedule(): Observable<TestSchedules[]> {
  // add authorization header with jwt token
  let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginLogoutService.token });
  let options = new RequestOptions({ headers: headers });

  // get users from api
  return this.http.get('/api/v1/director/testschedule', options)
      .map((response: Response) => response.json());
}
}
