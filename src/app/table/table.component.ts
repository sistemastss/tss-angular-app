import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataTable} from '../utilities';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  @Input() dataTable: DataTable;
  @Output() sendMessage = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log(this.dataTable);
  }

  onSendMessage(event) {
    this.sendMessage.emit(event);
  }
}
