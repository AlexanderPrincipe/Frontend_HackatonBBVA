import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-aforo',
  templateUrl: './home-aforo.component.html',
  styleUrls: ['./home-aforo.component.css']
})
export class HomeAforoComponent implements OnInit {

  @Input() arrDistanceNear: any = [];
  @Input() recomendado: any = {};
  coors: any;
  address: any;
  office: any;
  cantCaj: any;
  cantOut: any;
  cantVen: any;
  cantPla: any;
  timeAte: any;
  name: any;

  constructor() { }

  ngOnInit(): void {
  }

  open(event: any, item: any){
    console.log(item)
    this.coors = `https://maps.google.com/maps?q=${item.lat},${item.long}&hl=es;z=14&amp;output=embed`;
    const maps = document.querySelector('#map');
    if(maps){
      console.log("🚀 ~ file: home-aforo.component.ts ~ line 33 ~ HomeAforoComponent ~ open ~ maps", maps);
      maps.setAttribute('src',this.coors);
    }
    this.address = item.address;
    this.office = (item.process.cantidad / item.aforoMax) * 100;
    this.timeAte = `${Math.floor((Math.random()*10)+1)} min`;
    this.name = item.name;
    this.cantCaj = Math.floor((Math.random()*10)+1);
    this.cantOut = Math.floor((Math.random()*10)+1);
    this.cantVen = Math.floor((Math.random()*10)+1);
    this.cantPla = Math.floor((Math.random()*10)+1);
    
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