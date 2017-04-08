import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../services/topic.service';
import { Router } from '@angular/router';
import { Notice } from '../../models/notice';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.css']
})
export class UpdateTopicComponent implements OnInit {

  constructor(private topicService:TopicService,
  private router:Router) { }

  ngOnInit() {
  }

  updateTopicData(data:any,e:Event){
    e.preventDefault();
    this.topicService.updateTopic(data)
    .subscribe(
      result => {
          if (result === true) {
              // login successful
              this.router.navigate(['/receptionist-dash/checkTopicUpdate']);
          } else {
              // login failed
      }}
    );
  }

}
