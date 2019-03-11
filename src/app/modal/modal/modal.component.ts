import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {

  @Input() modal: Modal;
  @Input() toggle: boolean;
  @Output() onClose: EventEmitter<Object>;

  constructor() {
    this.onClose = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.modal)
    console.log(typeof this.modal);
  }

  ngOnChanges() {
    console.log(this.toggle);
  }

  closeModal() {
    this.onClose.emit({'close': true});
  }

  isArray() {
    return (this.modal.body.constructor === Array);
  }

  startCase(text) {
    const result = text.replace( /([A-Z])/g, ' $1' );
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}






interface Modal {
  title: string;
  body: any;
}
