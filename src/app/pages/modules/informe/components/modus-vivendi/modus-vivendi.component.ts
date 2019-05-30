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

  // forms
  formEgresos = this.mvService.formEgresos;
  formIngresos = this.mvService.formIngresos;
  formBienInmueble = this.mvService.formBienInmueble;
  formBienMueble = this.mvService.formBienMueble;
  formRefBancaria = this.mvService.formRefBancaria;
  formCapEndeudamiento = this.mvService.formCapEndeudamiento;

  // properties
  bienesInmuebles = [];
  bienesMuebles = [];
  refBancarias = [];
  capEndeudamiento = [];

  isUpdate = false;

  modalRef: NgbModalRef;
  dataLoaded = false;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private mvService: ModusVivendiService,
  ) { }

  ngOnInit() {
  }

  open(content, data?) {
    this.modalRef = this.modalService.open(content);
  }

  updateBienInmueble() {
    
  }

  deleteBienInmueble(id: any) {
    
  }

  updateBienMueble() {

  }

  deleteBienMueble(id: any) {

  }

  updateRefBancaria() {

  }

  deleteRefBancaria(id: any) {

  }

  updateCapEndeudamiento() {

  }

  deleteCapEndeudamiento(id: any) {

  }

  addBienInmueble() {

  }

  addBienMueble() {
    
  }

  addRefBancaria() {

  }

  addCapEndeudamiento() {

  }

  saveAll() {}
}
