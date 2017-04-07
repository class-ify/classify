import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../ui-init.service';


@Component({
  selector: 'app-director-dash',
  templateUrl: './director-dash.component.html',
  styleUrls: ['./director-dash.component.css','../../css/bootstrap.min.css','../../font-awesome/css/font-awesome.css',
  '../../css/plugins/toastr/toastr.min.css'
,'../../css/animate.css','../../css/style.css'],
  providers:[ UiInitService ]

})
export class DirectorDashComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }
}
