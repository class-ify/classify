import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../ui-init.service';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-teacher-dash',
  templateUrl: './teacher-dash.component.html',
  styleUrls: ['./teacher-dash.component.css','../../css/bootstrap.min.css','../../font-awesome/css/font-awesome.css',
  '../../css/plugins/toastr/toastr.min.css'
,'../../css/animate.css','../../css/style.css'],
  providers:[ UiInitService ]
})

export class TeacherDashComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }

}
