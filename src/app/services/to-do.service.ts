import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable()
export class ToDoService {

  constructor(private http: Http) {
  }

  getTodo(): Observable<Todo[]> {
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.get('/api/v1/todo', options)
          .map((response: Response) => response.json());
  }

  updateTodo(data:any):Observable<boolean>{
      // add authorization header with jwt token
      let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
      let options = new RequestOptions({ headers: headers });

      // get users from api
      return this.http.put('/api/v1/todo', JSON.stringify(data),options)
          .map((response: Response) => response.json());
}

addTodo(data:any):Observable<boolean>{
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers });

    // get users from api
    return this.http.post('/api/v1/todo', JSON.stringify(data),options)
        .map((response: Response) => response.json());
}

deleteTodo(data:any):Observable<boolean>{
    // add authorization header with jwt token
    let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem("token")});
    let options = new RequestOptions({ headers: headers, body:JSON.stringify(data) });

    // get users from api
    return this.http.delete('/api/v1/todo',options)
        .map((response: Response) => response.json());
}

}
