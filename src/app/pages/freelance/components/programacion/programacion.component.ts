import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { FreelanceService } from '../../services/freelance.service';
import { IProgramacion } from '../../interfaces/programacion.interface';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.component.html',
  styleUrls: ['./programacion.component.css']
})
export class ProgramacionComponent implements OnInit {

  @ViewChild('mdReprog') mdReprog: ElementRef;

  form = this.fb.group({
    fecha: ['', Validators.required],
    hora: ['', Validators.required],
  });

  data: IProgramacion;

  isLoadData = false;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private freelanceService: FreelanceService,
  ) { }

  ngOnInit() {

    this.freelanceService.getProgramacion().subscribe(
      (response: any) => {
        this.data = response.data;
        console.log(response.data);
        this.isLoadData = true;
      });
  }

  programar() {
    const data = this.form.value;
    /*this.freelanceService.saveProgramacion(data)
      .subscribe(response => alert('Programacion realizada con exito'));*/
  }

  reprogramar() {
    const data = {
      id: this.data.id,
      ...this.form.value
    };
    this.freelanceService.updateProgramacion(data)
      .subscribe(response => window.alert('Reprogramacion exitosa'));
  }

  open(content) {
    this.form.addControl('motivo', this.fb.control('', Validators.required));
    this.modalService.open(content);
  }

  close(content) {
    content.close();
  }

}
