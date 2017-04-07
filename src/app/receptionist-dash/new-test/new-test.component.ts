import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newTestData(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }

}
