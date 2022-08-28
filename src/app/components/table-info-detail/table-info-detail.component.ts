import { Component, Input, OnChanges, OnInit } from '@angular/core';


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
export class TableInfoDetailComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() serviceProcess: any;

  valueObject: any;
  arrayValuesProgressBar: any = [];

  displayedColumns: string[] = ['id', 'name', 'aforo_max'];
  
  constructor() { }

  ngOnInit(): void {
    this.getValueProgressBar();
    console.log('DATA IMPORTANTE 1', this.serviceProcess);
  }
  
  ngOnChanges() {
    this.getValueProgressBar();
    console.log('DATA IMPORTANTE 2', this.serviceProcess);
  }

  getValueProgressBar() {
      for (let i = 0; i < this.serviceProcess.length; i++) {
        console.log('cantidad itera', this.serviceProcess[i]);
        console.log('AFORO MAXIMO', this.getNumber(this.serviceProcess[i].aforoMax));
         const total = ((this.serviceProcess[i].cantidad ) / this.getNumber(this.serviceProcess[i].aforoMax)) * 100
         this.arrayValuesProgressBar.push(total);
         console.log('DATAAAAAAAAAAAAA', this.serviceProcess[i]);
         console.log('arrayValuesProgressBar', this.serviceProcess[i].aforo);
       }
          
       return this.arrayValuesProgressBar;
  }

  getNumber(value: any) {
    return parseInt(value);
  }

  getFormatWidth(value: any) {
    const objetoFormat = {
      "valueProgressBar" : `width: ${value}%`,
      "getColor": this.getClassColor(this.getNumber(value))
    }
    // console.log('objetoFormat', objetoFormat);
    return objetoFormat;
  }

  getClassColor(value: any) {
    return value < 20 ? 'progress-bar bg-success' : (value >= 20 && value < 60 ? 'progress-bar bg-warning' : 'progress-bar bg-danger');
  }




}


