import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-student-verify',
  templateUrl: './student-verify.component.html',
  styleUrls: ['./student-verify.component.css']
})
export class StudentVerifyComponent implements OnInit {

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
