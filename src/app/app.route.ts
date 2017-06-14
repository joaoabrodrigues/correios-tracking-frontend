import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { RastreioComponent } from './rastreio/rastreio.component';
export const routes: Routes = [
  { path: '', component:AppComponent ,
   children: [
    {path: 'rastreio/:id', component: RastreioComponent}
   ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:false});
