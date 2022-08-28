import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit {

  oficinas: any = [];
  lat: any;
  arrDistanceNear: any = []; 

  constructor(private customerService: CustomersService, private router: Router) {
  }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
  }

  onSuccess(position: any) {
    // this.lat = position.coords.latitude;
    this.lat = position ? position.coords.latitude : 1;
    console.log("🚀 ~ file: geolocalizacion.component.ts ~ line 30 ~ GeolocalizacionComponent ~ onSuccess ~ latitude", this.lat);
    console.log('POSITION', position);
    console.log('LAT', this.lat);
  }

  onError() {
    console.log('No pude obtener tu ubicación');
}

  async getOficinas() {
    const oficinas = await this.customerService.getOficinas().toPromise();
    this.oficinas = oficinas;
    let arrOffice = this.oficinas.response[15].provinces[0].districts[0].address;
    // arrOffice.forEach((element: any)=> {
    //   this.arrDistanceNear.push(this.haversineDistance(element.office.long,element.office.lat, this.longitude,this.latitude));
    // });
    // console.log('distance',this.arrDistanceNear);
  }


  haversineDistance(pointALongitude: any,pointALatitude: any, pointBLongitude: any,pointBLatitude: any ){
    console.log("🚀 ~ file: geolocalizacion.component.ts ~ line 51 ~ GeolocalizacionComponent ~ haversineDistance ~ pointALongitude", pointALongitude);
    var radius = 6371; // km     

    //convert latitude and longitude to radians
    const deltaLatitude = (pointBLatitude - pointALatitude) * Math.PI / 180;
    console.log("🚀 ~ file: geolocalizacion.component.ts ~ line 55 ~ GeolocalizacionComponent ~ haversineDistance ~ deltaLatitude", deltaLatitude);
    const deltaLongitude = (pointBLongitude - pointALongitude) * Math.PI / 180;

    const halfChordLength = Math.cos(
        pointALatitude * Math.PI / 180) * Math.cos(pointBLatitude * Math.PI / 180) 
        * Math.sin(deltaLongitude/2) * Math.sin(deltaLongitude/2)
        + Math.sin(deltaLatitude/2) * Math.sin(deltaLatitude/2);

    const angularDistance = 2 * Math.atan2(Math.sqrt(halfChordLength), Math.sqrt(1 - halfChordLength));

    return radius * angularDistance;
}



}
