import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  // ts-ignore
  selector: '[app-field]',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})

export class FieldComponent implements OnInit {

  @Input() field: object;

  @Output() sendMessage = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onKeyUp(value: string) {
    this.sendMessage.emit(value);
  }
}
