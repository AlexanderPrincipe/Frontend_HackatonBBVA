import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-aforo',
  templateUrl: './home-aforo.component.html',
  styleUrls: ['./home-aforo.component.css']
})
export class HomeAforoComponent implements OnInit {

  @Input() arrDistanceNear: any = [];
  @Input() recomendado: any = {};
  modalTitle = "";
  oficina = "";
  aforo = "";

  constructor() { }

  ngOnInit(): void {
  }
    addClick() {
    this.modalTitle = "Vista de Oficina";
    this.oficina = "";
    this.aforo = "";
  }
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home-aforo',
//   templateUrl: './home-aforo.component.html',
//   styleUrls: ['./home-aforo.component.css']
// })
// export class HomeAforoComponent implements OnInit {
//   modalTitle = "";
//   oficina = "";
//   aforo = "";
//   constructor() { }

//   ngOnInit(): void {
//   }

//   addClick() {
//     this.modalTitle = "Vista de Oficina";
//     this.oficina = "";
//     this.aforo = "";
//   }

// }