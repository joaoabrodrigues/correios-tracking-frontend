import { Component, OnInit } from '@angular/core';
import { CorreiosService } from '../services/correios.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rastreio',
  templateUrl: './rastreio.component.html',
  styleUrls: ['./rastreio.component.css']
})
export class RastreioComponent implements OnInit{
  
  codigoRastreio;
  conteudo;

  ngOnInit(): void {
    this._rota.params.subscribe(param=>{
      this.codigoRastreio = param["id"];
    });
    this._correio.getStatusCorreio(this.codigoRastreio).then(data => { 
      this.conteudo = data;
    }).catch(error => {
      this.conteudo = error;
    });
  }

  constructor(private _correio:CorreiosService, private _rota:ActivatedRoute) {

  }
}
