import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-box-div',
  templateUrl: './empty-box-div.component.html',
  styleUrls: ['./empty-box-div.component.scss'],
})
export class EmptyBoxDivComponent {
  @Input() message: string = '';

  constructor() {}
}
