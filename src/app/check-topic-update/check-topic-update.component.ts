import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../ui-init.service';


@Component({
  selector: 'app-check-topic-update',
  templateUrl: './check-topic-update.component.html',
  styleUrls: ['./check-topic-update.component.css'],
  providers:[ UiInitService ]

})
export class CheckTopicUpdateComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }
}
