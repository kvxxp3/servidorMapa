import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { TablaCoordComponent } from './tabla-coord/tabla-coord.component';
=======
import { MapPageComponent } from './map-page/map-page.component';
>>>>>>> 714d8fb6f2472a6c39cbe0d23a6439ba7aedce33

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TablaCoordComponent
=======
    MapPageComponent
>>>>>>> 714d8fb6f2472a6c39cbe0d23a6439ba7aedce33
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
