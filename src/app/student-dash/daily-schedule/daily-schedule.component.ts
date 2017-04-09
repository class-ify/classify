import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
import { ScheduleService } from '../../services/schedule.service';
import { Router } from '@angular/router';
import { Schedule } from '../../models/schedule';

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css']
})
export class DailyScheduleComponent implements OnInit {

  schedules: Schedule[] = [];
    constructor(private UiInitService:UiInitService,
      private router: Router,
          private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.UiInitService.setup();
        this.scheduleService.getSchedule()
        .subscribe(schedules => {
            this.schedules = schedules;
        });
    }

}
