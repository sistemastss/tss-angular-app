import { Component, OnInit } from '@angular/core';
import { Hijo } from '../../../interfaces';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-muebles',
  templateUrl: './muebles.component.html',
  styles: []
})
export class MueblesComponent implements OnInit {

  form = this.fb.group({
    id        : '',
    clase     : ['', Validators.required],
    modelo    : ['', Validators.required],
    placa     : ['', Validators.required],
    avaluo    : ['', Validators.required],
    pignorado : [false, Validators.required],
  });

  isUpdate: boolean;
  modalRef: NgbModalRef;
  bienesMuebles = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  open(content, data?: Hijo) {
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

  delete(id: number) {

  }

}
