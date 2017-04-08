import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-student',
  templateUrl: './contact-student.component.html',
  styleUrls: ['./contact-student.component.css']
})
export class ContactStudentComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getStudent()
           .subscribe(users => {
               this.users = users;
           });
   }
}
