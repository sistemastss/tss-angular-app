import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { HelperService } from '../../../services/helper.service';
import { servicio } from '../../control/types';

@Injectable({
  providedIn: 'root'
})
export class PoligrafiaService {

  constructor(
    private http: HttpClient,
    private helper: HelperService,
  ) {}

  fetch() {
    const url = this.helper.route('poligrafia');
    return this.http.get(url).pipe(
      map((value: servicio) => value.data)
    );
  }

  save(payload) {
    const url = this.helper.route('poligrafia');
    return this.http.post(url, payload);
  }

}
