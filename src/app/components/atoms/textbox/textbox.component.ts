import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent {

  @Input() placeHolder = "textbox";

  constructor() { }


}
