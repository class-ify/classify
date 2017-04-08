import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Faculty } from '../../models/faculty';

@Component({
  selector: 'app-check-faculty-rating',
  templateUrl: './check-faculty-rating.component.html',
  styleUrls: ['./check-faculty-rating.component.css']
})
export class CheckFacultyRatingComponent implements OnInit {

  faculties : Faculty[] =[];

    constructor (private router: Router,
    private http:Http) { }

    getFacultyRating(): Observable<Faculty[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/v1/faculty/rating', options)
            .map((response: Response) => response.json());
    }

    ngOnInit() {
        this.getFacultyRating()
        .subscribe(
          faculties => {
            this.faculties=faculties;
          }
        );
    }

}
