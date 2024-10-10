
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-failed-window',
  templateUrl: './failed-window.component.html',
  styleUrls: ['./failed-window.component.scss'],
})
export class FailedWindowComponent {

  @Input() message: string = '';
  @Input() tittle:string = '';
  @Input() buttonText: string = '';
  @Output() closed = new EventEmitter<void>();

 

  closeWindow() {
      this.closed.emit();
  }

}
