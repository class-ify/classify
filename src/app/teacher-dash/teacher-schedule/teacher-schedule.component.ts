import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';


@Component({
  selector: 'app-teacher-schedule',
  templateUrl: './teacher-schedule.component.html',
  styleUrls: ['./teacher-schedule.component.css'],
  providers:[UiInitService]
})
export class TeacherScheduleComponent implements OnInit {


    constructor(private UiInitService:UiInitService) { }

    ngOnInit() {
        this.UiInitService.setup();
    }

}
