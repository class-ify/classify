import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-faculty-rating',
  templateUrl: './create-faculty-rating.component.html',
  styleUrls: ['./create-faculty-rating.component.css']
})
export class CreateFacultyRatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createFacultyRatingData(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }
}
