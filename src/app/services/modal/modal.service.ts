import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  control = false;

  constructor() {}

  open() {
    this.control = true;
  }

  close() {
    this.control = false;
  }
}
