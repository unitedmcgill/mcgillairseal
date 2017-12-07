import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaskets',
  templateUrl: './gaskets.component.html',
  styleUrls: ['./gaskets.component.scss']
})
export class GasketsComponent implements OnInit {

  ngOnInit() {
  }

  public loadSafetyDataSheet(href){
    var win = window.open(href, '_blank');
    win.focus();    
  }
}
