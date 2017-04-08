import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-teacher-verification',
  templateUrl: './teacher-verification.component.html',
  styleUrls: ['./teacher-verification.component.css']
})
export class TeacherVerificationComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getTeacher()
           .subscribe(users => {
               this.users = users;
           });
   }
}
