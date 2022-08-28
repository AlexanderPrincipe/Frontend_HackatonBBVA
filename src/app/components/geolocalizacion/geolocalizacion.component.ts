import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(this.onSuccess);
  }

  onSuccess(position: any) {
    const { latitude , longitude} = position.coords;
    console.log(`${latitude},${longitude}`);
  }
}
