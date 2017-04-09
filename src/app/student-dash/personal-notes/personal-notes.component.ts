import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
declare var $:any;
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../../services/login-logout.service';
import { PersonalNotes } from '../../models/personalnotes';

@Component({
  selector: 'app-personal-notes',
  templateUrl: './personal-notes.component.html',
  styleUrls: ['./personal-notes.component.css'],
  providers:[ UiInitService]

})
export class PersonalNotesComponent implements OnInit {

  personalnotes:PersonalNotes[] =[];

  constructor(private UiInitService:UiInitService,
    private http:Http,
    private loginLogoutService: LoginLogoutService) { }

  ngOnInit() {

      this.UiInitService.setup();
      this.getPersonalNotes();
      $(document).ready(function () {
        $('.summernote').summernote();
      });
  }

  notedata(data:any,e:Event){
    e.preventDefault();
    this.addNote(data);
    }

  edit(e:Event){
    e.preventDefault();
    $('.click2edit').summernote({focus: true});
  }

  save(e:Event){
    e.preventDefault();
    var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
    $('.click2edit').destroy();

  }

  addNote(data:any): Observable<boolean> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.post('/api/v1/personalnotes/create',JSON.stringify(data),options)
          .map((response: Response) => response.json());
  }

  getPersonalNotes(): Observable<PersonalNotes[]> {
  // add authorization header with jwt token
  let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginLogoutService.token });
  let options = new RequestOptions({ headers: headers });

  // get users from api
  return this.http.get('/api/personalnotes/view', options)
      .map((response: Response) => response.json());
}

}
