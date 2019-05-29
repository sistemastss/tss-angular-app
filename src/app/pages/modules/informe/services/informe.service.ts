import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor() { }

  setId(id) {
    localStorage.setItem('informeId', id);
  }

  getId() {
    return localStorage.getItem('informeId');
  }
}
