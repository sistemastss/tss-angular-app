import { ElementRef, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private modalService: NgbModal,
  ) { }

  openModal(content: ElementRef) {
    this.modalService.open(content);
  }

  closeModal(modal) {
    modal.close();
  }
}
