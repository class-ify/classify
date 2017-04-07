import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-studyplanner',
  templateUrl: './create-studyplanner.component.html',
  styleUrls: ['./create-studyplanner.component.css']
})
export class CreateStudyplannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newplan(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }

}
