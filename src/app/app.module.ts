import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {RastreioComponent} from './rastreio/rastreio.component';
import { CorreiosService } from './services/correios.service';
import { routing } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    RastreioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CorreiosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
