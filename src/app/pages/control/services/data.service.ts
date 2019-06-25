import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EspService } from '../../shared/services';
import { InvestigacionService } from '../../shared/services';
import { PoligrafiaService } from '../../shared/services';
import { HelperService } from '../../../services/helper.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private espService: EspService,
    private investigacionService: InvestigacionService,
    private poligrafiaService: PoligrafiaService,
    private http: HttpClient,
    private helper: HelperService,
  ) { }

  fetchServicios() {
    return forkJoin(
      this.espService.fetch(),
      // this.investigacionService.fetch(),
      // this.poligrafiaService.fetch(),
    ).pipe(
      map((data: any) => data.flat()),
    );
  }

  getVsd(espId) {
    const url = this.helper.route(['esp', 'vsd'], espId);
    return this.http.get(url);
  }

  asignarVisitaDom(actId, payload) {
    const url = this.helper.route('actividad', actId);
    return this.http.put(url, payload);
  }

  getFreelances() {
    const url = this.helper.route('freelance');
    return this.http.get(url).pipe(map((value: any) => value.data));
  }
}
