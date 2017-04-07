import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {NoticeComponent} from './notice/notice.component';
import { UiInitService } from '../ui-init.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-receptionist-dash',
  templateUrl: './receptionist-dash.component.html',
  styleUrls: ['./receptionist-dash.component.css','../../css/bootstrap.min.css','../../font-awesome/css/font-awesome.css',
  '../../css/plugins/toastr/toastr.min.css'
,'../../css/animate.css','../../css/style.css'],
  providers:[ UiInitService ]

})

export class ReceptionistDashComponent implements OnInit{

  clicked:any;

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }

  onClick(clicked:string){
    this.clicked = clicked.split('/');
  }


}
