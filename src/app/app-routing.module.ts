import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapPageComponent } from './map-page/map-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'map',
    component: MapPageComponent
  },
  {
    path: 'map/:altitud/:latitud/:hora',
    component: MapPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
