import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { RastreioComponent } from './rastreio/rastreio.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: '', component:AppComponent ,
   children: [
    {path: 'rastreio/:id', component: RastreioComponent},
    {path: '', component: HomeComponent}
   ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash:false});
