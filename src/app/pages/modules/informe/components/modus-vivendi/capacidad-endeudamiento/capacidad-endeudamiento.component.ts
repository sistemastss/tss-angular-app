import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Hijo } from '../../../interfaces';

@Component({
  selector: 'app-capacidad-endeudamiento',
  templateUrl: './capacidad-endeudamiento.component.html',
  styles: []
})
export class CapacidadEndeudamientoComponent implements OnInit {

  form = this.fb.group({
    id           : '',
    descripcion  : ['', Validators.required],
    entidad      : ['', Validators.required],
    monto        : ['', Validators.required],
    estadoDeuda  : ['', Validators.required],
    valorMensual : ['', Validators.required],
  });

  isUpdate: boolean;
  modalRef: NgbModalRef;
  capEndeudamiento = [];

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
