import {  AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild, Input } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.css']
})
export class MapApiComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() center : L.LatLngExpression = [51.505, -0.09];
  mapRef: any;
  
  constructor(private renderer: Renderer2) { }

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
    L.marker([51.505, -0.082]).addTo(map).bindPopup("Punto 1").openPopup();
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
      [51.505, -0.082],
      [51.504, -0.09],
      [51.505, -0.10]
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

    control.setWaypoints(latlngs); //Establece los puntos en el mapa
    control.hide(); //Esconde un "modal" dentro del mapa con la ruta del trayecto
  }

  ngOnDestroy(): void {
    this.mapRef.off('click');
  }
}
