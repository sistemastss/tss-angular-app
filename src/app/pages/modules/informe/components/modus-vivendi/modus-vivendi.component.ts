import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModusVivendiService } from '../../services/modus-vivendi.service';

@Component({
  selector: 'app-modus-vivendi',
  templateUrl: './modus-vivendi.component.html',
  styles: []
})
export class ModusVivendiComponent implements OnInit {

  isUpdate = false;

  modalRef: NgbModalRef;
  dataLoaded = false;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  open(content, data?) {
    this.modalRef = this.modalService.open(content);
  }

}
