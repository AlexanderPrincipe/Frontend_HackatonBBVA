import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CustomersService } from 'src/app/services/customers.service';
const department: any = require('../../../assets/shares/departamentos.json');
const district: any = require('../../../assets/shares/distritos.json');
const province: any = require('../../../assets/shares/provincias.json');
const res: any = require('../../../assets/shares/res.json');

declare var require: any;

@Component({
  selector: 'app-aforo',
  templateUrl: './aforo.component.html',
  styleUrls: ['./aforo.component.css']
})
export class AforoComponent implements OnInit {

  // data: any[] = [
  //   {position: 1, name: 'Hydrogen', capacity: 1.0079, detail: 'H'},
  //   {position: 2, name: 'Helium', capacity: 4.0026, detail: 'He'},
  //   {position: 3, name: 'Lithium', capacity: 6.941, detail: 'Li'},
  //   {position: 4, name: 'Beryllium', capacity: 9.0122, detail: 'Be'},
  //   {position: 5, name: 'Boron', capacity: 10.811, detail: 'B'},
  //   {position: 6, name: 'Carbon', capacity: 12.0107, detail: 'C'},
  //   {position: 7, name: 'Nitrogen', capacity: 14.0067, detail: 'N'},
  //   {position: 8, name: 'Oxygen', capacity: 15.9994, detail: 'O'},
  //   {position: 9, name: 'Fluorine', capacity: 18.9984, detail: 'F'},
  //   {position: 10, name: 'Neon', capacity: 20.1797, detail: 'Ne'},
  // ];

  data: any[] = [];
  info: any[] = [];
  arrayProcess: any = [];
  newArrayProcess: any = [];

  arrDistanceNear: any = [];
  detailOffices: any = [];
  idInterval: any;

  officeProcess: any;
  oficinas: any = [];
  arrayProvince: any = [];
  arrayDistrict: any = [];
  arrayString: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;
  myControl = new FormControl('');
  options: any = department;
  optionsProvince: any = province;
  optionsDistrict: any = district;
  departmentSelected: any;

  constructor(private customerService: CustomersService, private router: Router) {}

  async ngOnInit() {
    
    
    // console.log('optionsProvince', this.optionsProvince);
    // console.log('options', this.options);
    // console.log('department', department);
    // console.log('province', province);
    // console.log('district', district);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngOnDestroy() {
    clearInterval(this.idInterval);
  }

  consolear() {
    console.log('asdsa', );
  }

  getSelectedDepartment(value: any) {
    const departmentFilter = department.filter((x: any) => x.buscador_ubigeo === value);
    // console.log('departmentFilter', departmentFilter[0].id_ubigeo);
    const res = Object.entries(province).map((x: any) => x).filter((x: any ) => x[0] === departmentFilter[0].id_ubigeo);
    this.arrayProvince = res.map((x:any) => x[1])
    console.log('arrayProvince', this.arrayProvince);
  }

  getSelectedProvince(value: any) { 
    // console.log('value', value.id_ubigeo);
    const res = Object.entries(district).map((x: any) => x).filter((x: any ) => x[0] === value.id_ubigeo);
    this.arrayDistrict = res.map((x:any) => x[1])
    console.log('arrayDistrict', this.arrayDistrict);
  }

  getSelectedDistrict(value: any) { 
    console.log('value', value.buscador_ubigeo);
    this.showTable(value.buscador_ubigeo);
  }






  async getOficinasPlus() {
    
    this.oficinas = await this.customerService.getOficinas().toPromise();
    let arrOffice = this.oficinas.response[15].provinces[0].districts[0].address;
    this.arrDistanceNear = [];
    arrOffice.forEach((element: any)=> {
      const temOffice = {
        "name":  element.office.name,
        "aforoMax": element.office.aforo_max,
        "lat": element.office.lat,
        "long": element.office.long,
        "address": element.name,
        "id": element.office.id,
      }
      this.arrDistanceNear.push(temOffice);
    });
    console.log('getOficinasPlus', this.arrDistanceNear);
    console.log('VERIFICAR DATRA', this.detailOffices);

    for (let i = 0; i< this.arrDistanceNear.length; i++){
      this.detailOffices.push( await this.customerService.getProcess(this.arrDistanceNear[i].id).toPromise());
    }

    for (let i = 0; i < this.detailOffices.length; i++) {
      if (this.arrDistanceNear && this.arrDistanceNear[i]) {
        console.log('AFORO MAX', this.detailOffices[i].response.aforo_max);
        console.log('RESPONSE CANTIDAD', this.detailOffices[i].response.cantidad);
        this.arrDistanceNear[i].aforo = Math.round(((this.detailOffices[i].response.cantidad) / this.getNumber(this.detailOffices[i].response.aforo_max)) * 100)
      }
    }

    for(let i=0; i< this.detailOffices.length; i++){
      if(this.arrDistanceNear[i] && this.arrDistanceNear) {
        this.arrDistanceNear[i].process = this.detailOffices[i].response;
      }
    };
    this.sortArrDistance(this.arrDistanceNear);
    // console.log('TODA LA DATA', this.arrDistanceNear);
  }

  async getProcessPlus() {
    // console.log('detailOffices 1', this.detailOffices);
    for (let i = 0; i< this.arrDistanceNear.length; i++){
      this.detailOffices.push( await this.customerService.getProcess(this.arrDistanceNear[i].id).toPromise());
    }

    for(let i=0; i< this.detailOffices.length; i++){
      this.arrDistanceNear[i].process = this.detailOffices[i].response;
    };

    for (let i = 0; i < this.detailOffices.length; i++) {
      this.arrDistanceNear[i].aforo = Math.round(((this.detailOffices[i].response.cantidad) / this.getNumber(this.detailOffices[i].response.aforo_max)) * 100)
    }
    this.sortArrDistance(this.arrDistanceNear);
    console.log('TODA LA DATA', this.arrDistanceNear);
  }

  getNumber(value: any) {
    return parseInt(value);
  }

  sortArrDistance(list: any = []){
    let n, i, k, aux;
    n = list.length;
    for (k = 1; k < n ; k++){
      for (i = 0; i< (n-k); i++){
        if(list[i].aforo > list[i+1].aforo){
          aux = list[i];
          list[i] = list[i+1];
          list[i+1] = aux; 
        }
      }
    }
  }

  async getOficinas() {
    const oficinas = await this.customerService.getOficinas().toPromise();
    this.oficinas = oficinas;
    console.log('Oficinas', this.oficinas.response);
  }

  async getProcess(id: any) {
    this.officeProcess = await this.customerService.getProcess(id).toPromise();
    console.log('officeProcesssss', this.officeProcess.response);
    return this.officeProcess.response;
  }

  async showTable(district: any) {
    await this.getOficinasPlus();
    // await this.getProcessPlus();
    this.getOficinas();
    this.idInterval = setInterval(()=> {
      this.getOficinasPlus();
      // this.getProcessPlus();
    },1000)
    const districtParameter = district.replace('lima', '');
    const districtParameterFinal = districtParameter.trim();
    const oficinasFiltradasDepartment = this.oficinas.response.filter((x: any) => x.name.toLowerCase() === 'lima');
    const oficinasFiltradasProvinces = oficinasFiltradasDepartment[0].provinces;
    const oficinasFiltradasDistricts = oficinasFiltradasProvinces[0].districts;


    const arrayData = oficinasFiltradasDistricts.filter((x: any) => x.name.toLowerCase() === districtParameterFinal.toLowerCase());
    this.info = arrayData;
    this.data = this.info[0].address;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: any) => option.buscador_ubigeo.toLowerCase().includes(filterValue));
  }

  

}
