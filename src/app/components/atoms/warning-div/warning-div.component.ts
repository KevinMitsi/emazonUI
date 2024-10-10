import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-div',
  templateUrl: './warning-div.component.html',
  styleUrls: ['./warning-div.component.scss']
})
export class WarningDivComponent  {
  @Input() warningMessage: string = '';
  
  constructor() { }
}
