import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-director',
  templateUrl: './contact-director.component.html',
  styleUrls: ['./contact-director.component.css']
})
export class ContactDirectorComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getDirector()
           .subscribe(users => {
               this.users = users;
           });
   }
}
