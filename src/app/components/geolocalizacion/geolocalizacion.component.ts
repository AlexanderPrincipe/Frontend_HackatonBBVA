import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit {

  lat: any = -12.0939254;
  long: any = -77.0210209;
  oficinas: any = [];
  arrDistanceNear: any = []; 
  recomendado: any;

  constructor(private customerService: CustomersService, private router: Router) {
  }

  async ngOnInit() {
    this.getLocation();
    await this.getOficinas();
    await this.getProcess();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
  }

  onSuccess(position: any) {
    let latitude = position.coords.latitude;
    console.log("🚀 ~ file: geolocalizacion.component.ts ~ line 30 ~ GeolocalizacionComponent ~ onSuccess ~ latitude", latitude);
    this.lat = latitude;
  }

  onError() {
    console.log('No pude obtener tu ubicación');
  }


  async getOficinas() {
    const oficinas = await this.customerService.getOficinas().toPromise();
    this.oficinas = oficinas;
    let arrOffice = this.oficinas.response[15].provinces[0].districts[0].address;
    arrOffice.forEach((element: any)=> {
      const temOffice = {
        "distance": this.haversineDistance(element.office.long,element.office.lat, this.long,this.lat),
        "name":  element.office.name,
        "aforoMax": element.office.aforo_max,
        "lat": element.office.lat,
        "long": element.office.long,
        "address": element.name,
        "id": element.office.id
      }
      this.arrDistanceNear.push(temOffice);
    });
    this.sortArrDistance(this.arrDistanceNear);
    let aux: any = [];
    for(let i=0; i<5;i++){
      aux.push(this.arrDistanceNear[i]);
    }
    this.arrDistanceNear = aux;
  }


  async getProcess() {
    const detailOffices: any =[];
    for (let i = 0; i< this.arrDistanceNear.length; i++){
      detailOffices.push( await this.customerService.getProcess(this.arrDistanceNear[i].id).toPromise());
    }
    for(let i=0; i< detailOffices.length; i++){
      this.arrDistanceNear[i].process = detailOffices[i].response;
    };
    let temp = this.arrDistanceNear;
    this.sortArrAforo(temp);
    this.recomendado = temp[0];
  }

  haversineDistance(pointALongitude: any,pointALatitude: any, pointBLongitude: any,pointBLatitude: any ){
    var radius = 6371; // km     

    //convert latitude and longitude to radians
    const deltaLatitude = (pointBLatitude - pointALatitude) * Math.PI / 180;
    const deltaLongitude = (pointBLongitude - pointALongitude) * Math.PI / 180;

    const halfChordLength = Math.cos(
        pointALatitude * Math.PI / 180) * Math.cos(pointBLatitude * Math.PI / 180) 
        * Math.sin(deltaLongitude/2) * Math.sin(deltaLongitude/2)
        + Math.sin(deltaLatitude/2) * Math.sin(deltaLatitude/2);

    const angularDistance = 2 * Math.atan2(Math.sqrt(halfChordLength), Math.sqrt(1 - halfChordLength));

    return radius * angularDistance;
}

sortArrDistance(list: any = []){
  let n, i, k, aux;
  n = list.length;
  for (k = 1; k < n ; k++){
    for (i = 0; i< (n-k); i++){
      if(list[i].distance > list[i+1].distance){
        aux = list[i];
        list[i] = list[i+1];
        list[i+1] = aux; 
      }
    }
  }
}

sortArrAforo(list: any = []){
  let n, i, k, aux;
  n = list.length;
  for (k = 1; k < n ; k++){
    for (i = 0; i< (n-k); i++){
      if(list[i].process.cantidad > list[i+1].process.cantidad){
        aux = list[i];
        list[i] = list[i+1];
        list[i+1] = aux; 
      }
    }
  }
}



}
