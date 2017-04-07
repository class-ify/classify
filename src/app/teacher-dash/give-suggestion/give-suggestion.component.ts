import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';

@Component({
  selector: 'app-give-suggestion',
  templateUrl: './give-suggestion.component.html',
  styleUrls: ['./give-suggestion.component.css'],
  providers:[ UiInitService ]

})
export class GiveSuggestionComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {
      this.UiInitService.setup();
  }

  giveSuggestionData(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }

}
