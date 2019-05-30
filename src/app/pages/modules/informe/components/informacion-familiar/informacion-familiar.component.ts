import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacion-familiar',
  templateUrl: './informacion-familiar.component.html',
  styles: []
})
export class InformacionFamiliarComponent implements OnInit {

  formNucleoFamiliar = this.fb.group({
    id               : '',
    nombreConyuge    : '',
    edadConyuge      : ['', [Validators.max(120), Validators.min(1)]],
    identificacion   : ['', Validators.min(0)],
    lugarExpedicion  : '',
    fechaNacimiento  : '',
    lugarNacimiento  : '',
    ocupacion        : '',
    empresa          : '',
    telefono         : ['', Validators.min(0)],
    tiempoLaborado   : '',
  });

  formHijo = this.fb.group({
    id          : '',
    edad        : ['', [Validators.required, Validators.max(120), Validators.min(1)]],
    nombre      : ['', Validators.required],
    ocupacion   : ['', Validators.required],
    ubicacion   : ['', Validators.required],
  });

  formInfoFamiliar = this.fb.group({
    id          : '',
    nombre      : ['', Validators.required],
    parentesco  : ['', Validators.required],
    edad        : ['', [Validators.required, Validators.max(120), Validators.min(1)]],
    ocupacion   : ['', Validators.required],
    telefono    : ['', [Validators.required, Validators.min(0)]],
    ciudad      : ['', Validators.required],
    viveConUd   : false,
  });

  formReferencias = this.fb.group({
    id            : '',
    nombre        : ['', Validators.required],
    ocupacion     : ['', Validators.required],
    telefono      : ['', [Validators.required, Validators.min(0)]],
    ciudad        : ['', Validators.required],
    confirmacion  : ['', Validators.required],
  });

  modalRef: NgbModalRef;
  hijos = [];
  referencias = [];
  infoFamiliar = [];
  isUpdate = false;
  selectedItem: any;
  dataLoaded = false;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  open(content, data?) {
    this.modalRef = this.modalService.open(content);
    this.isUpdate = false;
    if (data) {
      this.isUpdate = true;
      this.selectedItem = data;
    }
  }

  close() {
    this.modalRef.close();
  }

  addHijos() {
    this.close();
  }

  updateHijo() {
    this.close();
  }

  deleteHijo(id: any) {
  }

  addInfoFamiliar() {
    this.close();
  }

  updateInfoFamiliar() {
    this.close();
  }

  deleteInfoFamiliar(id: any) {

  }

  addReferencia() {
    this.close();
  }

  updateReferencia() {
    this.close();
  }

  deleteReferencia(id: any) {

  }

  saveAll() {

  }
}
