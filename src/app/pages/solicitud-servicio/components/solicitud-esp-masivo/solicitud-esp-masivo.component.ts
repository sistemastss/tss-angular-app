import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../../services/data.service';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solicitud-esp-masivo',
  templateUrl: './solicitud-esp-masivo.component.html',
  styles: ['']
})
export class SolicitudEspMasivoComponent implements OnInit {

  form = new FormGroup({
    anexo: new FormControl('', Validators.required)
  });

  fileUrl = 'http://localhost:8000/images/demo.xls';

  constructor(
    private store: Store<any>,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  async cargarArchivo($event) {

    // this.store.dispatch(new AgregarEspMasivo(data));
    /*
    fileReader.addEventListener('load', () => {
      this.form.get('anexo').patchValue(fileReader.result);
    });

    fileReader.readAsDataURL(file);
     */
  }

  guardarEspMasivos() {
    const data = this.form.value;
    console.log(data);
    this.store.select(state => state.centroCosto)
      .subscribe(value => {
        this.dataService.almacenarCentroCosto(value)
          .subscribe(id => {
            console.log(id);
            this.dataService.almacenarEspMasivo(id, data)
                .subscribe(res => {
                  console.log('servicios agregados');
                  this.router.navigate(['/control']);
                });
            }
          );
      });
  }
}
