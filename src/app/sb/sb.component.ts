import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sb',
  templateUrl: './sb.component.html',
  styleUrls: ['./sb.component.scss']
})
export class SBComponent implements OnInit {

  ngOnInit() {
  }

  public loadSafetyDataSheet(href){
    var win = window.open(href, '_blank');
    win.focus();    
  }
}
