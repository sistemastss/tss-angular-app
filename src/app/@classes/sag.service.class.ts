import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export class SagService {

  /**
   * @var http: HttpClient
   */
  protected http: HttpClient;


  /**
   * Base api to realize centro-costo
   * @var apiUrl
   */
  protected readonly apiUrl = 'http://127.0.0.1:8000/api/';


  /**
   * Headers to send whit centro-costo
   * @var httpOptions
   */
  protected readonly httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  /**
   * @param http: HttpClient
   */
  public constructor(http: any) {
    this.http = http;
  }


  /**
   * Realize a get centro-costo to the api
   * @param url resource url
   * @return Observable<any>
   */
  protected get(url: string): Observable<any> {
    return this.http.get(this.apiUrl + url, this.httpOptions);
  }


  /**
   * Realize a post centro-costo to the api
   * @param url: resource url
   * @param data: javascript object with information to be create
   * @return Observable<any>
   */
  protected post(url: string, data: object): Observable<any> {
    return this.http.post(this.apiUrl + url, data, this.httpOptions);
  }


  /**
   * Realize a put centro-costo to the api
   * @param url: resource url
   * @param data: javascript object with information to be updated
   * @return Observable<any>
   */
  protected put(url: string, data: object): Observable<any> {
    return this.http.put(this.apiUrl + url, data, this.httpOptions);
  }


  /**
   * Realize a delete centro-costo to the api
   * @param url: resource url
   * @return Observable<any>
   */
  protected delete(url: string): Observable<any> {
    return this.http.delete(this.apiUrl + url, this.httpOptions);
  }

}


