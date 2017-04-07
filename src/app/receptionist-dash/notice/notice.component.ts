import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css','../../../css/bootstrap.min.css','../../../font-awesome/css/font-awesome.css',
'../../../css/plugins/iCheck/custom.css','../../../css/animate.css','../../../css/style.css']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNoticeData(data:any,e:Event){
    e.preventDefault();
    console.log(data);
  }

}
