import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() name:string  = 'Nav button name';
  @Output() onClickEvent = new EventEmitter<void>();

  constructor() { }

  onNavItemClick() {
    this.onClickEvent.emit();
  }


}
