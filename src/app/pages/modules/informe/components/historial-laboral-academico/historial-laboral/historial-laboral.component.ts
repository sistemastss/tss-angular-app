import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-historial-laboral',
  templateUrl: './historial-laboral.component.html',
  styles: []
})
export class HistorialLaboralComponent implements OnInit {

  form = this.fb.group({
    id            : '',
    empresa       : [ '', Validators.required ],
    cargo         : [ '', Validators.required ],
    telefono      : [ '', Validators.required ],
    periodo       : [ '', Validators.required ],
    jefeInmediato : [ '', Validators.required ],
    cargoJefe     : [ '', Validators.required ],
    ciudad        : [ '', Validators.required ],
    motivoRetiro  : [ '', Validators.required ],
    confirmacion  : [ '', Validators.required ],
    observaciones : [ '', Validators.required ],
  });

  isUpdate: boolean;
  modalRef: NgbModalRef;
  verificacionLaboral = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  open(content, data?) {
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
