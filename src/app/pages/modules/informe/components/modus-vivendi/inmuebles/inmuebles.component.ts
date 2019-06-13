import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Hijo } from '../../../interfaces';

@Component({
  selector: 'app-inmuebles',
  templateUrl: './inmuebles.component.html',
  styles: []
})
export class InmueblesComponent implements OnInit {

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
  bienesInmuebles = [];

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
