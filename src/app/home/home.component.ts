import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../assets/css/bootstrap.css','../../assets/css/font-awesome.min.css','../../assets/css/flexslider.css',
'../../assets/css/style.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  yash:string;
  siddhesh:string;
  sid:string;
  
  ngOnInit() {
    this.siddhesh = 'assets/img/faculty/1.jpg';
    this.yash = 'assets/img/faculty/2.jpg'
    this.sid = 'assets/img/faculty/3.jpg'

  }

}