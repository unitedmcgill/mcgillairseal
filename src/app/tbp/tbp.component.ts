import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tbp',
  templateUrl: './tbp.component.html',
  styleUrls: ['./tbp.component.scss']
})
export class TBPComponent implements OnInit {

  ngOnInit() {
  }

  public loadSafetyDataSheet(href){
    var win = window.open(href, '_blank');
    win.focus();    
  }
}
