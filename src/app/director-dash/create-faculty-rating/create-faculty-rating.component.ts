import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-faculty-rating',
  templateUrl: './create-faculty-rating.component.html',
  styleUrls: ['./create-faculty-rating.component.css']
})
export class CreateFacultyRatingComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  createFacultyRating(data:any):Observable<boolean>{
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/faculty/rating/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  createFacultyRatingData(data:any,e:Event){
    e.preventDefault();
    this.createFacultyRating(data)
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
