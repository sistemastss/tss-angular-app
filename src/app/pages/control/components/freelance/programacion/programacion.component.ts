import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Programacion } from '../../../interfaces/programacion.interface';
import { ProgramacionService } from '../../../services/freelance/programacion.service';
import { DataService } from '../../../services/data.service';
import { forkJoin } from 'rxjs';
import { FreelanceService } from '../../../services/freelance/freelance.service';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styles: []
})
export class ProgramacionComponent implements OnInit {

  form = this.fb.group({
    fecha : [ '', Validators.required ],
    hora  : [ '', Validators.required ],
  });

  data: Programacion;
  isLoadData = false;

  vsdId;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private programacionService: ProgramacionService,
    private dataService: DataService,
    private freelanceService: FreelanceService,
  ) { }

  ngOnInit() {

    const espId = this.freelanceService.getEsp().id;
    this.dataService.getVsd(espId).subscribe(
      (response: any) => {
        this.vsdId = response.id;

        this.programacionService.get(this.vsdId).subscribe(
          (response: Programacion) => {
            this.data = response;
            this.isLoadData = true;
          });
      }
    );
  }

  programar() {
    const data = this.form.value;
    this.programacionService.guardar(this.vsdId, data).subscribe(
      () => {
        alert('Programación creada con exito');
        window.location.reload();
      },
      () => alert('Ocurrio un error, intente mas tarde')
    )



    
  }

  reprogramar() {
    const data = {
      id: this.data.id,
      ...this.form.value,
    };

    this.programacionService.actualizar(this.vsdId, data).subscribe(
      () => alert('Programación actualizada con exito'),
      () => alert('Ocurrio un error, intente mas tarde')
    )
  }

  open(content) {
    this.form.addControl('motivo', this.fb.control('', Validators.required));
    this.modalService.open(content);
  }

  close(content) {
    content.close();
  }

}
