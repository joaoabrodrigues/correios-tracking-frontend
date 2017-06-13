import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class CorreiosService {

  constructor(private _http:Http) {

  }

  getStatusCorreio(codigo) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' });
    const body = new URLSearchParams();
    body.set('Objetos', codigo);
    let options = new RequestOptions({ headers : headers });
    return this._http.post('http://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm', body.toString(), options)
                     .toPromise()
                     .then((resp:Response) => resp.text());
  }


}
