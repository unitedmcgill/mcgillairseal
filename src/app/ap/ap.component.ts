import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.scss']
})
export class APComponent implements OnInit {

  ngOnInit() {
  }

  public loadSafetyDataSheet(href){
    var win = window.open(href, '_blank');
    win.focus();    
  }
}
