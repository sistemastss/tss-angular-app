import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { File } from '../../../../../@models/file.interface';
import { HelperService } from '../../../../../services/helper.service';
import { EstudioSeguridadService } from '../../services/informe/estudio-seguridad.service';

@Component({
  selector: 'app-estudio-seguridad',
  templateUrl: './estudio-seguridad.component.html',
  styles: []
})
export class EstudioSeguridadComponent implements OnInit {
  servicio: any;

  data = {
    fotoEvaluado: null,
    logoCliente: null,
  };
  dataLoaded = false;

  constructor(
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

    const data: File = {
      fileName: file.name,
      blob: base64
    };

    this.data.fotoEvaluado = data;
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

    const data: File = {
      fileName: file.name,
      blob: base64
    };

    this.data.logoCliente = data;

  }

  saveAll() {
    this.estudioSeguridad.save(this.data, 1).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

  makeFileUrl(fileName: string) {
    return this.helper.makeFileUrl(fileName);
  }


}
