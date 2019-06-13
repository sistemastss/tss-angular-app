import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Hijo } from '../../../interfaces';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styles: []
})
export class HijosComponent implements OnInit {

  form = this.fb.group({
    id          : '',
    edad        : ['', [Validators.required, Validators.max(120), Validators.min(1)]],
    nombre      : ['', Validators.required],
    ocupacion   : ['', Validators.required],
    ubicacion   : ['', Validators.required],
  });

  hijos: Hijo[] = [];

  isUpdate = false;

  private modalRef: NgbModalRef;

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

  delete(id: any) {

  }
}
