import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-bar',
  templateUrl: './load-bar.component.html',
  styleUrls: ['./load-bar.component.css']
})
export class LoadBarComponent implements OnInit {
  oficina: any;
  listaPorcentajes: Array<any> = [
    { "valor": "25"},
      { "valor": "30"},
      { "valor": "35"},
      { "valor": "40"},
      { "valor": "45"},
      { "valor": "50"}
  ];
  urlImg: string;
  listaOficinas: Array<any> = [
    {"nombre": "OFICINA 1", "direccion": "AV PRUEBA 123", "distrito": "SAN ISIDRO"},
  {"nombre": "OFICINA 2", "direccion": "AV PRUEBA 1233", "distrito": "SAN ISIDRO"},
  {"nombre": "OFICINA 3", "direccion": "AV PRUEBA 12344", "distrito": "SAN ISIDRO"},
  {"nombre": "OFICINA 4", "direccion": "AV PRUEBA 123444", "distrito": "SAN ISIDRO"},
  {"nombre": "OFICINA 5", "direccion": "AV PRUEBA 1235555", "distrito": "SAN ISIDRO"},
  {"nombre": "OFICINA 6", "direccion": "AV PRUEBA 12355555", "distrito": "SAN ISIDRO"}
  ]


  constructor() {

    this.urlImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
  }

  ngOnInit(): void {

  }

}
