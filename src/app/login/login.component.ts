import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logindata(log:any,e:Event){
    e.preventDefault();
    let email = log.email;
    let password = log.password;
    console.log(email);
    console.log(password);
  }
}
