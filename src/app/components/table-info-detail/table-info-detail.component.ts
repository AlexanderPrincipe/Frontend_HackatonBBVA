import { Component, Input, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  capacity: number;
  detail: string;
}

 const data: PeriodicElement[] = [
   {position: 1, name: 'Hydrogen', capacity: 1.0079, detail: 'H'},
   {position: 2, name: 'Helium', capacity: 4.0026, detail: 'He'},
   {position: 3, name: 'Lithium', capacity: 6.941, detail: 'Li'},
   {position: 4, name: 'Beryllium', capacity: 9.0122, detail: 'Be'},
   {position: 5, name: 'Boron', capacity: 10.811, detail: 'B'},
   {position: 6, name: 'Carbon', capacity: 12.0107, detail: 'C'},
   {position: 7, name: 'Nitrogen', capacity: 14.0067, detail: 'N'},
   {position: 8, name: 'Oxygen', capacity: 15.9994, detail: 'O'},
   {position: 9, name: 'Fluorine', capacity: 18.9984, detail: 'F'},
   {position: 10, name: 'Neon', capacity: 20.1797, detail: 'Ne'},
 ];

@Component({
  selector: 'app-table-info-detail',
  templateUrl: './table-info-detail.component.html',
  styleUrls: ['./table-info-detail.component.css']
})
export class TableInfoDetailComponent implements OnInit {
  @Input() data: any;
  @Input() serviceProcess: any;

  displayedColumns: string[] = ['id', 'name', 'district_id', 'aforo_max'];
  
  constructor() { }

  ngOnInit(): void {
  }

}


// import {Component} from '@angular/core';


// /**
//  * @title Basic use of `<table mat-table>`
//  */
// @Component({
//   selector: 'table-basic-example',
//   styleUrls: ['table-basic-example.css'],
//   templateUrl: 'table-basic-example.html',
// })
// export class TableBasicExample {
//   displayedColumns: string[] = ['position', 'name', 'capacity', 'detail'];
//   dataSource = ELEMENT_DATA;
// }
