import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-danger',
  templateUrl: './text-danger.component.html',
  styleUrls: ['./text-danger.component.scss']
})
export class TextDangerComponent {

  @Input() text:string = "text";

  constructor() { }

}
