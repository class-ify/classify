import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';


@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
  providers:[ UiInitService ]

})
export class SuggestionsComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }
}
