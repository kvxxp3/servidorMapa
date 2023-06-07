import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabla-coord',
  templateUrl: './tabla-coord.component.html',
  styleUrls: ['./tabla-coord.component.css']
})
export class TablaCoordComponent implements OnInit {

  objetoJSON:any="";
  coordArray:any[] =[];

  ngOnInit() {
    localStorage.removeItem('array');
    this.guardarCoordenadas();
    this.sacarCoordenadas();
  }


  guardarCoordenadas(){
    const objCoord1 = { altitud: '32.231', latitud: '-102.324',hora:'3:00pm'};
    const objCoord2 = { altitud: '32.231', latitud: '-102.324',hora:'3:00pm'};
    const objCoord3 = { altitud: '32.231', latitud: '-102.324',hora:'3:00pm'};
    const arrObjCoord = [objCoord1,objCoord2,objCoord3];
    const arrJSONs = JSON.stringify(arrObjCoord);
    localStorage.setItem('array', arrJSONs);
  }

  sacarCoordenadas(){
    this.objetoJSON  = localStorage.getItem('array');
    this.coordArray = JSON.parse(this.objetoJSON);
  }

  
}

