import { Injectable } from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private dataService: DataService) { }

  sendMail(body) {

    return this.dataService.httpPost(`mail`, body);
  }
}
