import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() row: object;
  @Output() sendMessage = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSendMessage(event) {
    this.sendMessage.emit(event)
  }
}
