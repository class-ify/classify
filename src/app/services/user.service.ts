import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { LoginLogoutService } from './login-logout.service';
import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private loginLogoutService: LoginLogoutService) {
    }

    getStudent(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginLogoutService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/v1/students', options)
            .map((response: Response) => response.json());
    }

    getDirector(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginLogoutService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/v1/directors', options)
            .map((response: Response) => response.json());
    }
    getTeacher(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginLogoutService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/v1/teachers', options)
            .map((response: Response) => response.json());
    }
    getReceptionist(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.loginLogoutService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/v1/receptionists', options)
            .map((response: Response) => response.json());
    }
}
