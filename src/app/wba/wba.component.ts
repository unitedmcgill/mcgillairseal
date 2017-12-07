import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wba',
  templateUrl: './wba.component.html',
  styleUrls: ['./wba.component.scss']
})
export class WBAComponent implements OnInit {

  ngOnInit() {
  }

  public loadSafetyDataSheet(href){
    var win = window.open(href, '_blank');
    win.focus();    
  }
}
