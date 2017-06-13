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

  ngOnInit(): void {
    this._rota.params.subscribe(param=>{
      this.codigoRastreio = param["id"];
    });
    this._correio.getStatusCorreio(this.codigoRastreio).then(data => { 
      var temp = data.split("<body>")[1].split('<img')[0].replace("listEvent sro","table table-striped table-bordered table-hover");
      this.conteudo = temp.replace(/<br\s*[\/]?>/gi,"");
    }).catch(error => {
      this.conteudo = error;
    });
  }

  conteudo;
  constructor(private _correio:CorreiosService, private _rota:ActivatedRoute) {

  }
}
