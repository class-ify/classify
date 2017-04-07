import { Component, OnInit } from '@angular/core';
import { UiInitService } from '../../ui-init.service';
declare var $:any;


@Component({
  selector: 'app-personal-notes',
  templateUrl: './personal-notes.component.html',
  styleUrls: ['./personal-notes.component.css'],
  providers:[ UiInitService]

})
export class PersonalNotesComponent implements OnInit {

  constructor(private UiInitService:UiInitService) { }

  ngOnInit() {

      this.UiInitService.setup();
      $(document).ready(function () {
        $('.summernote').summernote();
      });
  }

  notedata(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }

  edit(e:Event){
    e.preventDefault();
    $('.click2edit').summernote({focus: true});
  }

  save(e:Event){
    e.preventDefault();
    var aHTML = $('.click2edit').code(); //save HTML If you need(aHTML: array).
    $('.click2edit').destroy();

  }

}
