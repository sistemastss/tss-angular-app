import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-habitos-salud',
  templateUrl: './habitos-salud.component.html',
  styles: []
})
export class HabitosSaludComponent implements OnInit {

  form = this.fb.group({
    id              : '',
    fuma            : [ false, Validators.required ],
    consumeAlcohol  : [ false, Validators.required ],
    consumeDrogas   : [ false, Validators.required ],
    realizaDeporte  : [ '', Validators.required ],
    hobbies         : [ '', Validators.required ],
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
