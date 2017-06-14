import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CorreiosService {

  constructor(private _http:Http) {

  }

  getStatusCorreio(codigo) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' });
    let options = new RequestOptions({ headers : headers });
    return this._http.get(`https://correios-track.herokuapp.com/rest/track/${codigo}`)
                     .toPromise()
                     .then((resp:Response) => resp.json());
  }
}
