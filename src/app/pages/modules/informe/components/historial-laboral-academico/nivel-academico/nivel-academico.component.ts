import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Hijo } from '../../../interfaces';

@Component({
  selector: 'app-nivel-academico',
  templateUrl: './nivel-academico.component.html',
  styles: []
})
export class NivelAcademicoComponent implements OnInit {

  form = this.fb.group({
    id            : '',
    nivel         : [ '', Validators.required ],
    institucion   : [ '', Validators.required ],
    titulo        : [ '', Validators.required ],
    anno          : [ '', Validators.required ],
    ciudad        : [ '', Validators.required ],
    confirmacion  : [ true, Validators.required ],
    observacion   : [ '', Validators.required ],
  });

  isUpdate: boolean;
  modalRef: NgbModalRef;
  nivelesAcademicos = [];

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
