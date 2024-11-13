import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() messageChild: string = '';
  @Output() eventvariable = new EventEmitter<string>();

  sendData(data: string) {
      this.eventvariable.emit(data);
  }

}
