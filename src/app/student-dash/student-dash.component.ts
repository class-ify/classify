import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../ui-init.service';


@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css','../../css/bootstrap.min.css','../../font-awesome/css/font-awesome.css',
  '../../css/plugins/toastr/toastr.min.css'
,'../../css/animate.css','../../css/style.css'],
  providers:[ UiInitService ]

})
export class StudentDashComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }
}
