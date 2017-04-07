import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';


@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css'],
  providers:[ UiInitService ]

})
export class ViewScheduleComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }
}
