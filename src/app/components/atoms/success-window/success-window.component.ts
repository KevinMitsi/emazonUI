import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success-window',
  templateUrl: './success-window.component.html',
  styleUrls: ['./success-window.component.scss'],
 
})
export class SuccessWindowComponent {
  @Input() message: string = '';
  @Input() tittle:string = '';
  @Input() buttonText: string = '';
  @Output() closed = new EventEmitter<void>();

  
  
  closeWindow() {
    this.closed.emit();
  }

  
}