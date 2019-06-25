import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ServicioState } from '../../store/states';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HelperService } from '../../../../services/helper.service';
import { getServicios } from '../../store/selectors';
import { FetchServicios } from '../../store/actions/servicios.actions';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../../../services/data.service';
import { Router } from '@angular/router';
import { FreelanceService } from '../../services/freelance/freelance.service';
import { LoginService } from '../../../../services/login.service';
import { AuthService } from '../../../../services/auth/auth.service';
import { VsdService } from '../../../../services/vsd.service';

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
    private freelanceService: FreelanceService,
    private authService: AuthService,
    private loginService: LoginService,
    private vsdService: VsdService,
  ) { }

  ngOnInit() {

    this.store.select(getServicios).subscribe(
      state => {
        this.servicios = state;
        this.servicios.forEach(value => {
          value['vsd'] = value.actividades.filter(act => act.actividad_id === 2)[0];
        });
      }
    );
    this.store.dispatch(new FetchServicios());
  }

  makeFileUrl(fileName: string) {
    return this.helper.makeFileUrl(fileName);
  }

  verDetalle(content, item: any) {
    this.selectedItem = item;
    this.freelanceService.setEsp(item);
    const modalRef = this.modalService.open(content, { size: 'lg' });
  }

  aceptarServicio(item: any) {
    const data = {
      actividad_aplicada_id: item.vsd.id,
    };
    this.freelanceService.aceptarVisitaDom(item.id, data).subscribe(
      () => item.vsd.estado = 'aceptado',
      () => alert('Ocurrio un error, intente mas tarde')
    );
  }

  rechazarServicio(content, item) {
    this.modalRef = this.modalService.open(content);
    this.selectedItem  = item;
  }

  guardarRechazo() {
    const data = {
      estado: 'rechazado',
      justificacion_rechazo: this.justificacionRechazo.value,
      freelance_id: this.authService.getUser().user.id,
    };
    
    this.freelanceService.rechazarVisitaDom(this.selectedItem.id, data).subscribe(
      () => {
        this.modalRef.close();
        this.servicios.splice(this.servicios.indexOf(this.selectedItem), 1);
      },
      () => {
        alert('Ocurrio un error, intente mas tarde')
      }
    );
  }

  agregarInformacion(item) {
    this.vsdService.loadVsd(item.id).subscribe((response: any) => {
      this.vsdService.setVsd(response.id);
      this.router.navigate(['/informe/estudio-seguridad']);
    });
  }

  navigateToInfo() {

  }
}
