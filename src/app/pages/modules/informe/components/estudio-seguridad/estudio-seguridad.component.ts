import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { File } from '../../../../../@models/file.interface';
import { HelperService } from '../../../../../services/helper.service';
import { EstudioSeguridadService } from '../../services/informe/estudio-seguridad.service';
import { VsdService } from '../../../../../services/vsd.service';

@Component({
  selector: 'app-estudio-seguridad',
  templateUrl: './estudio-seguridad.component.html',
  styles: []
})
export class EstudioSeguridadComponent implements OnInit {
  servicio: any;

  data = {
    foto_evaluado: null,
    logo_cliente: null,
  };
  dataLoaded = false;

  constructor(
    private vsd: VsdService,
    private router: Router,
    private helper: HelperService,
    private estudioSeguridad: EstudioSeguridadService,
  ) { }

  ngOnInit() {
    this.estudioSeguridad.get(1).subscribe((value: any) => {
      this.data = value.data;
      this.dataLoaded = true;
    });
  }

  onNext() {
    this.router.navigate(['']);
  }

  async setLogoCliente(event) {
    const allowedExtensions = /(\.png|\.jpeg|\.jpg)$/i;
    const file = event.target.files[0];

    if (!allowedExtensions.test(file.name)) {
      alert('Archivo no valido');
      event.target.value = '';
      return;
    }

    const base64 = await this.helper.readFile(file);

    this.data.foto_evaluado = {
      file_name: file.name,
      blob: base64
    };
  }

  async setImagenEvaluado(event) {
    const allowedExtensions = /(\.png|\.jpeg|\.jpg)$/i;
    const file = event.target.files[0];

    if (!allowedExtensions.test(file.name)) {
      alert('Archivo no valido');
      event.target.value = '';
      return;
    }

    const base64 = await this.helper.readFile(file);

    this.data.logo_cliente = {
      file_name: file.name,
      blob: base64
    };

  }

  saveAll() {
    const vsdId = this.vsd.getVsd();
    this.estudioSeguridad.save(this.data, vsdId).subscribe(
      response => {
        swal('Datos guardados con exito', '', 'success')
      },
      error => console.log(error)
    );
  }

  makeFileUrl(fileName: string) {
    return this.helper.makeFileUrl(fileName);
  }


}
