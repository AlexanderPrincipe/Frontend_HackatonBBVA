import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-bar',
  templateUrl: './load-bar.component.html',
  styleUrls: ['./load-bar.component.css']
})
export class LoadBarComponent implements OnInit {
  @Input() value: any;
  @Input() process: any;

  valueObject: any;
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
    console.log('MAGIA 2', this.process);
    this.valueObject = {
      "value" : `width: ${30}%`,
      "number" : `${30}%`,
      "color" : this.getClassColor(30)
    };
  }

  getValueProgressBar() {
    const randito = this.getRandomInt(80);
    // const valorProgressBar = parseInt(this.process.cantidad) - parseInt(this.process.aforo_max);

    // console.log('cantidad', parseInt(this.process.cantidad));
    // console.log('aforo', parseInt(this.process.aforo_max));

    setTimeout(() => {
      console.log('PROCESS 2', parseInt(this.process));
    }, 10000);
    setTimeout(() => {
  
      console.log('HOLA');
      this.valueObject = {
        "value" : `width: ${(parseInt(this.process.cantidad) - parseInt(this.process.aforo_max))*100}%`,
        "number" : `${(parseInt(this.process.cantidad) - parseInt(this.process.aforo_max))*100}%`,
        "color" : this.getClassColor((parseInt(this.process.cantidad) - parseInt(this.process.aforo_max))*100)
      };
    }, 10000);

    return this.valueObject;
  }

  getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }

  getClassColor(value: any) {
    return value < 20 ? 'progress-bar bg-success' : (value >= 20 && value < 60 ? 'progress-bar bg-warning' : 'progress-bar bg-danger');
  }
  



}
