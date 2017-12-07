import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wb',
  templateUrl: './wb.component.html',
  styleUrls: ['./wb.component.scss']
})
export class WBComponent implements OnInit {

  ngOnInit() {
  }

  public loadSafetyDataSheet(href){
    var win = window.open(href, '_blank');
    win.focus();    
  }
}
