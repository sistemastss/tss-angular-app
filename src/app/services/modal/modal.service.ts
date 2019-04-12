import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal: Modal;
  control = false;

  constructor() {}

  createModal(element: ElementRef) {
    this.modal = new Modal(element);
    return this.modal;
  }

  open() {
    this.control = true;
  }

  close() {
    this.control = false;
  }

}

class Modal {
  private control: boolean;
  private element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
    this.control = false;
  }

  open() {
    this.control = true;
  }

  close() {
    this.control = false;
  }
}
