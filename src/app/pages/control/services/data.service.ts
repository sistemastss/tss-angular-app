import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EspService } from '../../shared/services';
import { InvestigacionService } from '../../shared/services';
import { PoligrafiaService } from '../../shared/services';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private espService: EspService,
    private investigacionService: InvestigacionService,
    private poligrafiaService: PoligrafiaService,
  ) { }

  fetchServicios() {
    return forkJoin(
      this.espService.fetch(),
      this.investigacionService.fetch(),
      this.poligrafiaService.fetch(),
    ).pipe(
      map((data: any) => data.flat()),
    );
  }
}
