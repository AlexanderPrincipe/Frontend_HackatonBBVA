import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  oficinas: any;

  constructor(private customerService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.getOficinas();
  }

  async getOficinas() {
    const oficinas = await this.customerService.getOficinas().toPromise();
    this.oficinas = oficinas;
    console.log('Ofinciaks', this.oficinas.response);
  }

}
