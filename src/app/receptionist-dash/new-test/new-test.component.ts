import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})

export class NewTestComponent implements OnInit {

  constructor(private router: Router,
      private http: Http) {
  }

  ngOnInit(){}

  newTest(data:any): Observable<boolean> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/test/create',JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  newTestData(data:any,e:Event){
    e.preventDefault();
    this.newTest(data)
    .subscribe(
      result => {
          if (result === true) {
              // login successful

          } else {
              // login failed
      }}
    );
  }

}
