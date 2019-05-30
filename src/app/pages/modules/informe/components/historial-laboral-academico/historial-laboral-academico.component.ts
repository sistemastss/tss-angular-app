import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-historial-laboral-academico',
  templateUrl: './historial-laboral-academico.component.html',
  styles: []
})
export class HistorialLaboralAcademicoComponent implements OnInit {
  verificacionLaboral: any;
  form: any;
  historialAcademico: any;
  isUpdate = false;
  private modalRef: NgbModalRef;
  dataLoaded = false;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  open(content, data?) {
    this.modalRef = this.modalService.open(content);
  }

  addHistorialLaboral() {

  }
  updateHistorialLaboral() {

  }

  deleteHistorialLaboral(id: any) {

  }

  addNivelAcademico() {

  }

  updateNivelAcademico() {

  }

  deleteNivelAcademico(id: any) {

  }

  saveAll() {}
}
