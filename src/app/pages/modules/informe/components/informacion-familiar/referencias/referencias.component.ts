import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Referencia } from '../../../interfaces';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styles: []
})
export class ReferenciasComponent implements OnInit {

  form = this.fb.group({
    id            : '',
    nombre        : ['', Validators.required],
    ocupacion     : ['', Validators.required],
    telefono      : ['', [Validators.required, Validators.min(0)]],
    ciudad        : ['', Validators.required],
    confirmacion  : ['', Validators.required],
  });

  referencias: Referencia[];

  isUpdate = false;
  modalRef: NgbModalRef;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  open(content, data?: Referencia) {
    this.isUpdate = false;

    if (data) {
      this.form.setValue(data);
      this.isUpdate = true;
    }

    this.modalRef = this.modalService.open(content);
  }

  close() {
    this.modalRef.close();
  }

  add() {

    this.close();
  }

  update() {

    this.close();
  }

  delete(id: any) {

  }
}
