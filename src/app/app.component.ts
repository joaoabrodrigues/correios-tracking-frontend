import { Component, OnInit } from '@angular/core';
import { CorreiosService } from './services/correios.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this._correio.getStatusCorreio('PO149120810BR').then(data => { 
      this.conteudo = data.split("<body>")[1].split('<img')[0];
    }).catch(error => {
      this.conteudo = error;
    });
  }

  title = 'app';
  conteudo;
  constructor(private _correio:CorreiosService) {

  }
}
