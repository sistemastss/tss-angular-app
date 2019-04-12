import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../services/data.service';
import {Helper} from '../../../@classes/helper-class';
import {Store} from '@ngrx/store';
import {EspMasivoState} from '../../../store/state';
import {AgregarEspMasivo, AlmacenarCentroCosto, Servicios} from '../../../store/actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solicitud-esp-masivo',
  templateUrl: './solicitud-esp-masivo.component.html',
  styleUrls: ['./solicitud-esp-masivo.component.css']
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
    const file = $event.target.files[0];
    const blob = await Helper.readFile(file);
    this.form.get('anexo').patchValue(blob);


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
