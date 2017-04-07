import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision-poll',
  templateUrl: './revision-poll.component.html',
  styleUrls: ['./revision-poll.component.css']
})
export class RevisionPollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  revisionPollData(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }
  
}
