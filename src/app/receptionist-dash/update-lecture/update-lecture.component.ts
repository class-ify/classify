import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-lecture',
  templateUrl: './update-lecture.component.html',
  styleUrls: ['./update-lecture.component.css']
})
export class UpdateLectureComponent implements OnInit {

  constructor(private router: Router,
      private http: Http) {
  }

  ngOnInit(){}

  updateLecture(data:any): Observable<boolean> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/lecture/create',JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  updateLectureData(data:any,e:Event){
    e.preventDefault();
    this.updateLecture(data)
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
