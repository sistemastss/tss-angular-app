import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelperService } from '../../../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) { }


  get() {
    const url = this.helper.route('usuario');
    return this.http.get(url);
  }

  crear(payload) {
    const url = this.helper.route('usuario');
    return this.http.post(url, payload);
  }

  editar(payload, id) {
    const url = this.helper.route('usuario', id);
    return this.http.put(url, payload);
  }

  eliminar(id) {
    const url = this.helper.route('usuario');
    return this.http.delete(url);
  }
}
