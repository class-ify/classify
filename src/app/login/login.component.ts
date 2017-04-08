import { Component, OnInit } from '@angular/core';
import { LoginLogoutService } from '../services/login-logout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      loading = false;
      error = '';

  constructor(private router: Router,
        private loginLogoutService: LoginLogoutService) { }

        ngOnInit() {
               // reset login status
               this.loginLogoutService.logout();
          }

  logindata(data:any,e:Event){
    e.preventDefault();
    this.loading=true;
    this.loginLogoutService.login(JSON.stringify(data))
        .subscribe(result => {
            if (result === true) {
                // login successful
                this.router.navigate(['/']);
            } else {
                // login failed
                this.error = 'Email or password is incorrect';
                this.loading = false;
              }});
  }


}
