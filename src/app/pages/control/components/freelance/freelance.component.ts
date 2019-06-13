import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServicioState } from '../../store/states';
import { NgbModal, NgbModalRef, NgbTabContent } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { getServicios } from '../../store/selectors';
import { FetchServicios } from '../../store/actions/servicios.actions';
import { DetalleServicioComponent } from '../detalle-servicio/detalle-servicio.component';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelance',
  templateUrl: './freelance.component.html',
  styles: []
})
export class FreelanceComponent implements OnInit {

  justificacionRechazo = this.fb.control('', Validators.required);
  servicios = [];
  private modalRef: NgbModalRef;

  selectedItem;


  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private store: Store<ServicioState>,
    private modalService: NgbModal,
    private helper: HelperService,
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {

    this.store.select(getServicios).subscribe(
      state => {
        this.servicios = state.filter(value => value.tipoServicio === 'esp' && value.estado !== 'rechazado');
        // this.servicios = state;
        this.dataService.setServicios(state);
      }
    );
    this.store.dispatch(new FetchServicios());
  }

  makeFileUrl(fileName: string) {
    return this.helper.makeFileUrl(fileName);
  }

  verDetalle(content, item: any) {
    console.log(item);
    const modalRef = this.modalService.open(content, { size: 'lg' });
    modalRef.componentInstance.servicio = item;
  }

  verActividades(item: any) {

  }

  aceptarServicio(item: any) {
    const data = {
      estado: 'aceptado',
      freelanceId: 1,
    };
    const route = this.helper.route('esp', item.id);
    this.http.put(route, data).subscribe(value => {
      window.location.reload();
    });

    // item.estado = 'aceptado';

    // this.dataService.setServicios(this.servicios);
  }

  rechazarServicio(content, item) {
    this.modalRef = this.modalService.open(content);

    this.selectedItem  = item;

  }

  guardarRechazo() {

    this.modalRef.close();
    const data = {
      estado: 'rechazado',
      freelanceId: 1,
    };
    const route = this.helper.route('esp', this.selectedItem.id);
    this.http.put(route, data).subscribe(value => {
      window.location.reload();
    });
  }

  agregarInformacion() {
    this.router.navigate(['../freelance/informe/programacion']);
  }

  navigateToInfo() {

  }
}
