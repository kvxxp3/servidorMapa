import {  AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { DatabaseService } from '../api/database.service';
import { Coordenadas } from '../interfaces/coordenadas';

@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.css']
})
export class MapApiComponent implements OnInit, AfterViewInit, OnDestroy {
  ListCoor: Coordenadas[] = [];
  @Input() center : L.LatLngExpression = [21.881381, -102.297014];
  mapRef: any;
  
  constructor(private renderer: Renderer2, public dbService: DatabaseService) {
    this.loadCoor();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    const mapDiv = document.getElementById('map') as HTMLElement;
    const map = L.map(mapDiv).setView(this.center, 16); 
    this.mapRef = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);

    //Globo para marcador (pone notas en waypoint)
    //L.marker([51.505, -0.082]).addTo(map).bindPopup("Punto 1").openPopup();
    //Marcadores
    //Punto 1
    //L.marker([51.504, -0.09],{draggable: false}).addTo(map);
    //Punto 2
    //L.marker([51.505, -0.082],{draggable: false}).addTo(map);
    //Punto 3
    //L.marker([51.505, -0.10],{draggable: false}).addTo(map);
    
    this.renderer.addClass(mapDiv, 'visible');

    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(mapDiv);

    //Array con coordenadas

    
    var latlngs :any = [
      /*[51.505, -0.082],
      [51.504, -0.09],
      [51.505, -0.10]*/
    ];
 
 
    /*
    Código para poner líneas rígidas en el mapa
    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
    map.fitBounds(polyline.getBounds());
    */

    //Código para el Leaflet Routing Machine para mostrar la línea de ruta
    const planOptions = {       
      addWaypoints: false,       
      draggableWaypoints: false     
    }; 

    const plan = new L.Routing.Plan(latlngs, planOptions);

    const control = L.Routing.control({
      plan,
      addWaypoints: false,
      routeWhileDragging: false
    }).addTo(map);
 

    this.ListCoor = [
      { id:"1",longitud:"21.952514",latitud:"-102.333070",hora:"1"},
      { id:"2",longitud:"21.940793",latitud:"-102.317207",hora:"2"},
      { id:"3",longitud:"21.941937",latitud:"-102.325586",hora:"3"},
     
    ];


    for (var i = 0; i < this.ListCoor.length; i++) {
      var objCoorde = this.ListCoor[i];
      var lati = parseFloat(objCoorde .latitud);
      var longi = parseFloat(objCoorde .longitud);
      
      
      latlngs.push([longi,lati]);
    }
   
    console.log(latlngs);
    


    control.setWaypoints(latlngs); //Establece los puntos en el mapa
    control.hide(); //Esconde un "modal" dentro del mapa con la ruta del trayecto
  }

  ngOnDestroy(): void {
    this.mapRef.off('click');
  }

  public loadCoor(): void{
    this.dbService.getCoor().subscribe(
      (res) => {
        //variable para guardar la conversion de datos json a string
        const listString = JSON.stringify(res);
        //concatena los datos que se reciben uno a uno en listString en el arreglo ListCoor
        this.ListCoor = JSON.parse(listString);
        //DEBUG
        console.log('Coordenadas nuevas = ' + this.ListCoor);
      },
      (e) => {
        console.log('ERROR: ' + e);
      }
    );
  }
}
