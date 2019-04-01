import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-asignar-funcionario',
  templateUrl: './asignar-funcionario.component.html',
  styles: []
})
export class AsignarFuncionarioComponent implements OnInit {

  @Input() funcionario: number;
  @Output() event = new EventEmitter();

  funcionarios: any[];

  form = new FormGroup({
    funcionario: new FormControl('', Validators.required)
  });

  constructor(private _data: DataService,) {}

  ngOnInit() {
    this._data.frelance().subscribe(
      (value: any) => this.funcionarios = value.servicios,
      err => console.log(err)
    );
  }

  onSubmit() {
    this.event.emit(this.form.value);
  }
}
