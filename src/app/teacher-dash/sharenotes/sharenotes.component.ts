import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UiInitService } from '../../ui-init.service';


@Component({
  selector: 'app-sharenotes',
  templateUrl: './sharenotes.component.html',
  styleUrls: ['./sharenotes.component.css'],
    providers:[ UiInitService ]
})
export class SharenotesComponent implements OnInit {
  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }
}
