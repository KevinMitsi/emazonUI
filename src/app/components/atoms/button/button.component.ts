import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text:string = 'Button';
  @Output() onClickEvent = new EventEmitter<void>();

  constructor() { }

  clickEvent() {
    this.onClickEvent.emit();
  }

}
