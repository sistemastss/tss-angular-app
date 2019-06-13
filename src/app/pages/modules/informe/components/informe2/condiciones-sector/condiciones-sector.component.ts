import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-condiciones-sector',
  templateUrl: './condiciones-sector.component.html',
  styles: []
})
export class CondicionesSectorComponent implements OnInit {

  form = this.fb.group({
    id                    : '',
    ciudad                : ['', Validators.required],
    barrio                : ['', Validators.required],
    localidad             : ['', Validators.required],
    viasAcceso            : ['', Validators.required],
    transportePublico     : ['', Validators.required],
    centrosAsistenciales  : ['', Validators.required],
    flujoVehicular        : ['', Validators.required],
    nivelSeguridad        : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
