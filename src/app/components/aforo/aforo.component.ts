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

  ngOnInit() {
    this.getOficinas();
    // console.log('optionsProvince', this.optionsProvince);
    // console.log('options', this.options);
    // console.log('department', department);
    // console.log('province', province);
    console.log('district', district);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),  
    );
  }

  getSelectedDepartment(value: any) {
    const departmentFilter = department.filter((x: any) => x.buscador_ubigeo === value);
    // console.log('departmentFilter', departmentFilter[0].id_ubigeo);
    const res = Object.entries(province).map((x: any) => x).filter((x: any ) => x[0] === departmentFilter[0].id_ubigeo);
    this.arrayProvince = res.map((x:any) => x[1])
    // console.log('arrayProvince', this.arrayProvince);
  }

  getSelectedProvince(value: any) { 
    // console.log('value', value.id_ubigeo);
    const res = Object.entries(district).map((x: any) => x).filter((x: any ) => x[0] === value.id_ubigeo);
    this.arrayDistrict = res.map((x:any) => x[1])
    // console.log('arrayDistrict', this.arrayDistrict);
  }

  getSelectedDistrict(value: any) { 
    console.log('value', value.buscador_ubigeo);
    this.showTable(value.buscador_ubigeo);
  }

  async getOficinas() {
    const oficinas = await this.customerService.getOficinas().toPromise();
    this.oficinas = oficinas;
    console.log('Oficinas', this.oficinas.response);
  }

  showTable(district: any) {
    const districtParameter = district.replace('lima', '');
    console.log('DISTRICT final', districtParameter.trim());

    const districtParameterFinal = districtParameter.trim();

    // const oficinasFiltradas = this.oficinas.filter((x: any) => x.name.toLowerCase() === 'Lima');
    // const oficinasFiltradas = this.oficinas.filter((x: any) => x.name.toLowerCase() === 'Lima');
    console.log('OFICINAS', this.oficinas.response);
    console.log('oficinasFiltradas', this.oficinas.response.filter((x: any) => x.name.toLowerCase() === 'lima'));

    const oficinasFiltradasDepartment = this.oficinas.response.filter((x: any) => x.name.toLowerCase() === 'lima');
    const oficinasFiltradasProvinces = oficinasFiltradasDepartment[0].provinces;
    const oficinasFiltradasDistricts = oficinasFiltradasProvinces[0].districts;


    const arrayData = oficinasFiltradasDistricts.filter((x: any) => x.name.toLowerCase() === districtParameterFinal.toLowerCase());
    console.log('filtrado', oficinasFiltradasDistricts.filter((x: any) => x.name.toLowerCase() === districtParameterFinal.toLowerCase()));
    console.log('oficinasFiltradasDistricts', oficinasFiltradasDistricts);
    console.log('district', districtParameterFinal);

    this.info = arrayData;
    console.log('arrayData', arrayData);
    console.log('DATA', this.info[0].address);
    this.data = this.info[0].address;
  }





  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: any) => option.buscador_ubigeo.toLowerCase().includes(filterValue));
  }

  

}
