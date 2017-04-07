import { Component, OnInit } from '@angular/core';
import {UiInitService} from '../../ui-init.service';

@Component({
  selector: 'app-test-schedule',
  templateUrl: './test-schedule.component.html',
  styleUrls: ['./test-schedule.component.css'],
  providers:[UiInitService]
})
export class TestScheduleComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }

}
