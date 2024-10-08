import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})
export class GreenButtonComponent {

  @Input() text:string = "Button";
  @Output() clickEvent:EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  onClick() {
    this.clickEvent.emit();
  }
}
