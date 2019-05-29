import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FreelanceService } from '../../services/freelance.service';
import { FormBuilder, Validators } from '@angular/forms';
import { IViatico } from '../../interfaces/viatico.interface';

@Component({
  selector: 'app-viaticos',
  templateUrl: './viaticos.component.html',
  styleUrls: ['./viaticos.component.css']
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
  viaticos: IViatico[];

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private freelanceService: FreelanceService,
  ) { }

  ngOnInit() {
    this.freelanceService.getviaticos()
      .subscribe((response: any) => {
        this.viaticos = response.data;
        this.isLoadData = true;
      });
  }

  addViatico() {
    const data = this.form.value;
    this.freelanceService.saveViatico(data)
      .subscribe((response: any) => window.alert('Viatico creado con exito'));
  }

  open(content) {
    this.modalService.open(content);
  }

}
