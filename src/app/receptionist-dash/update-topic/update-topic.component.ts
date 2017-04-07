import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html',
  styleUrls: ['./update-topic.component.css']
})
export class UpdateTopicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateTopicData(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }

}
