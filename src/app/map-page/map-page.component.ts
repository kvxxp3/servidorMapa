import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  public altitud: string="";
  public latitud: string="";
  public hora: string="";

  constructor(private _route:ActivatedRoute, private _router: Router){
    this._route.params.subscribe((params: Params) => {
      this.altitud=params['altitud'];
      this.latitud=params['latitud'];      
      this.hora=params['hora'];
      //DEBUG
      // console.log(params['altitud']);
      // console.log(params['latitud']);
      // console.log(params['hora']);
    })
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
