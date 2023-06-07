import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapPageComponent } from './map-page/map-page.component';
import { TablaCoordComponent } from './tabla-coord/tabla-coord.component';
import { MapApiComponent } from './map-api/map-api.component';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    TablaCoordComponent,
    MapApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
