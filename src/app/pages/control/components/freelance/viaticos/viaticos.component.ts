import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { FreelanceService } from '../../services/freelance.service';
import { FormBuilder, Validators } from '@angular/forms';
// import { IViatico } from '../../interfaces/viatico.interface';

@Component({
  selector: 'app-viaticos',
  templateUrl: './viaticos.component.html',
  styles: []
})
export class ViaticosComponent implements OnInit {

  form = this.fb.group({
    id: 0,
    origen: ['', Validators.required],
    destino: ['', Validators.required],
    tarifa: ['', Validators.required],
    fechaCreacion: '',
    estado: '',
  });

  isLoadData = false;
  viaticos = [];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {

  }

  addViatico() {

  }

  open(content) {
    this.modalService.open(content);
  }

  delete() {

  }
}
