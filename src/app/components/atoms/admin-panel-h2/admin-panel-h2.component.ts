import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-panel-h2',
  templateUrl: './admin-panel-h2.component.html',
  styleUrls: ['./admin-panel-h2.component.scss']
})
export class AdminPanelH2Component  {

  @Input() normalText:string = "Admin Panel H2";
  @Input() highlightedText:string = "";
  constructor() { }

  

}
