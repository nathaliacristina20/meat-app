import { MenuItem } from './menu-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {
  @Input()
  menuItem!: MenuItem;

  @Output() add = new EventEmitter<MenuItem>();

  constructor() {}

  ngOnInit(): void {}

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }
}
