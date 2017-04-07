import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  forgotdata(data:any,e:Event){
    e.preventDefault();
    console.log(data);
    // toast
    setTimeout(function(){
      window.location.href="/login";
    },2000);
  }

}
