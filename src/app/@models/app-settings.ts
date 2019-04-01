import {HttpHeaders} from '@angular/common/http';

export const BASE_API =  'http://127.0.0.1:8000/api/';

export const config = {
  api: 'http://127.0.0.1:8000/api',
  httpOpts: {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
};
