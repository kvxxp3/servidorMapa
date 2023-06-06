import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent{
  public altitud: string="";
  public latitud: string="";
  public hora: string="";
  public datos: string="";

  constructor(private _route:ActivatedRoute, private _router: Router){
    this._route.params.subscribe((params: Params) => {
      //recibe los datos de los parametros de la ruta definidos en app-routing.module.ts
      this.altitud=params['altitud'];
      this.latitud=params['latitud'];      
      this.hora=params['hora'];
      //DEBUG
      // console.log(params['altitud']);
      // console.log(params['latitud']);
      // console.log(params['hora']);
    })
  }

  guardarDatos(){
    //elimina datos previos del local storage
    localStorage.clear();
    //guarda los nuevos datos
    localStorage.setItem('altitud', JSON.stringify(this.altitud));
    localStorage.setItem('latitud', JSON.stringify(this.latitud));
    localStorage.setItem('hora', JSON.stringify(this.hora));
  }

  recuperarDatos(){
    //guarda todos los datos en una misma variable
    this.datos = "Altitud: " + JSON.parse(localStorage.getItem('altitud') || '{}');
    this.datos += " Latitud: " + JSON.parse(localStorage.getItem('latitud') || '{}');
    this.datos += " Hora: " + JSON.parse(localStorage.getItem('hora') || '{}');
    //DEBUG
    console.log("DATOS DEL LOCALSTORAGE = "+this.datos)
  }


}
