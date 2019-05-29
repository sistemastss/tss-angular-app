import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
  ) { }

  route(values: any, params: any = null): string {
    let url = environment.api;

    if (Array.isArray(values)) {
      values.forEach((value, index) => {

        if (params[index]) {
          url += `/${value}/${params[index]}`;

        } else if (params !== null) {

          if (index === 0) {
            url += `/${value}/${params}`;

          } else {
            url += `/${value}`;

          }
        } else {
          url += `/${value}`;

        }
      });
    } else {
      if (!params) {
        url += `/${values}`;
      } else {
        url += `/${values}/${params}`;
      }
    }
    return url;
  }

  readFile(file) {
    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
      fileReader.onerror = () => {
        fileReader.abort();
        reject(new DOMException('Problem parsing input file.'));
      };

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    });
  }

  makeFileUrl(fileName: string): string {
    return this.route('files', fileName);
  }
}
