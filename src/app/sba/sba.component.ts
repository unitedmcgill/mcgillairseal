import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sba',
  templateUrl: './sba.component.html',
  styleUrls: ['./sba.component.scss']
})
export class SBAComponent implements OnInit {

  ngOnInit() {
  }

  public loadSafetyDataSheet(href){
    var win = window.open(href, '_blank');
    win.focus();    
  }
}
