import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-lecture',
  templateUrl: './update-lecture.component.html',
  styleUrls: ['./update-lecture.component.css']
})
export class UpdateLectureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateLectureData(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }

}
