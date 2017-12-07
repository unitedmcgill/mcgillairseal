import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aia',
  templateUrl: './aia.component.html',
  styleUrls: ['./aia.component.scss']
})
export class AIAComponent implements OnInit {

  ngOnInit() {
  }

  public loadSafetyDataSheet(href){
    var win = window.open(href, '_blank');
    win.focus();    
  }
}
