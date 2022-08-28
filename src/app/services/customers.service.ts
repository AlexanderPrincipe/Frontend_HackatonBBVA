import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url = 'http://localhost:3000/api';
  hackaton = 'https://us-central1-bbva-hackathon.cloudfunctions.net/';
  process = 'https://us-central1-bbva-hackathon.cloudfunctions.net/office?office_id='

  constructor(
    private http: HttpClient
  ) { 

  }

  getCustomers() {
    return this.http.get(`${this.url}/customers`)
  }

  saveCustomer(customer: Customer) {
    return this.http.post(`${this.url}/saveCustomer`, customer);
  }

  getOficinas() {
    return this.http.get(`${this.hackaton}/offices`);
  }

  getProcess(id: any) {
    return this.http.get(`${this.process}${id}`);
  }
}