import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel-h2',
  templateUrl: './admin-panel-h2.component.html',
  styleUrls: ['./admin-panel-h2.component.scss']
})
export class AdminPanelH2Component implements OnInit {

  @Input() normalText:string = "Admin Panel H2";
  @Input() highlightedText:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
