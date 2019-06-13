import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Programacion } from '../../../interfaces/programacion.interface';
import { ProgramacionService } from '../../../services/freelance/programacion.service';

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

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private programacionService: ProgramacionService,
  ) { }

  ngOnInit() {
    this.programacionService.get().subscribe(
      (response: Programacion) => {
        this.data = response;
        this.isLoadData = true;
      });
  }

  programar() {
    const data = this.form.value;
    console.log(data);
  }

  reprogramar() {
    const data = {
      id: this.data.id,
      ...this.form.value,
    };
  }

  open(content) {
    this.form.addControl('motivo', this.fb.control('', Validators.required));
    this.modalService.open(content);
  }

  close(content) {
    content.close();
  }

}
