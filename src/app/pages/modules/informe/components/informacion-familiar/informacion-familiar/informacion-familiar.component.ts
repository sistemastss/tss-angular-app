import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InformacionFamiliar } from '../../../interfaces';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-informacion-familiar',
  templateUrl: './informacion-familiar.component.html',
  styles: []
})
export class InformacionFamiliarComponent implements OnInit {


  form = this.fb.group({
    id          : '',
    nombre      : ['', Validators.required],
    parentesco  : ['', Validators.required],
    edad        : ['', [Validators.required, Validators.max(120), Validators.min(1)]],
    ocupacion   : ['', Validators.required],
    telefono    : ['', [Validators.required, Validators.min(0)]],
    ciudad      : ['', Validators.required],
    viveConUd   : false,
  });

  infoFamiliar: InformacionFamiliar[] = [];
  selectedItem: InformacionFamiliar;
  isUpdate = false;

  modalRef: NgbModalRef;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  open(content, data?: InformacionFamiliar) {
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
