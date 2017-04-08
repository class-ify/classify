import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-suggestion',
  templateUrl: './give-suggestion.component.html',
  styleUrls: ['./give-suggestion.component.css'],
  providers:[ UiInitService ]

})

export class GiveSuggestionComponent implements OnInit {

  constructor(private UiInitService:UiInitService,
  private http: Http) { }

  ngOnInit() {
      this.UiInitService.setup();
  }

  giveSuggestion(data:any):Observable<boolean>{
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/suggestions/create', JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  giveSuggestionData(data:any,e:Event){
    e.preventDefault();
    this.giveSuggestion(data)
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
