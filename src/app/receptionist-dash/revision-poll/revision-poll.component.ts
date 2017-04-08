import { Component, OnInit } from '@angular/core';
import { PollService } from '../../services/poll.service';
import { Router } from '@angular/router';
import { Poll } from '../../models/poll';

@Component({
  selector: 'app-revision-poll',
  templateUrl: './revision-poll.component.html',
  styleUrls: ['./revision-poll.component.css']
})
export class RevisionPollComponent implements OnInit {

  constructor(private router: Router,
      private pollService: PollService) { }

      ngOnInit() {}

  revisionPollData(data:any,e:Event){
    e.preventDefault();
    this.pollService.addPoll(data)
    .subscribe(
      result => {
          if (result === true) {
              // login successful
              // VIEW POLLS TO BE CREATED//
              this.router.navigate(['/receptionist-dash/revision-poll']);
          } else {
              // login failed
      }}
    );
    }

}
