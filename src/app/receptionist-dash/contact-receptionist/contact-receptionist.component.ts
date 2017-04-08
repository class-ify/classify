import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-receptionist',
  templateUrl: './contact-receptionist.component.html',
  styleUrls: ['./contact-receptionist.component.css']
})
export class ContactReceptionistComponent implements OnInit {

  users: User[] = [];

   constructor(private userService: UserService) { }

   ngOnInit() {
       // get users from secure api end point
       this.userService.getReceptionist()
           .subscribe(users => {
               this.users = users;
           });
   }
}
