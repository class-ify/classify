import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNoticeData(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }

}
