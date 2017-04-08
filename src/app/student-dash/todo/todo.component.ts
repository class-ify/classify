import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService:ToDoService) {  }

  // remaining :loop todos in html
  // update todo on click
  // delete todo on click
  ngOnInit() {
      this.todoService.getTodo()
      .subscribe(todos => {
          this.todos = todos;
      });
  }

  newtodo(data:any,e:Event){
    e.preventDefault();
    this.todoService.addTodo(data)
    .subscribe(result=>{
      if(result === true){
          // added
      }else{
        // rejected
      }
    });
  }


}
