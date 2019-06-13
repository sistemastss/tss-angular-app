import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styles: []
})
export class FamiliaComponent implements OnInit {


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
