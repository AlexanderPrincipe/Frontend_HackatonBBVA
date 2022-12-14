import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersService } from "./services/customers.service";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TableInfoDetailComponent } from './components/table-info-detail/table-info-detail.component';
import { MatTableModule } from '@angular/material/table';  
import { AforoComponent } from './components/aforo/aforo.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeAforoComponent } from './components/home-aforo/home-aforo.component';
import { LoadBarComponent } from './load-bar/load-bar.component';
import { GeolocalizacionComponent } from './components/geolocalizacion/geolocalizacion.component';
import { MatSelectModule } from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Carousel2Component } from './components/carousel2/carousel2.component';

@NgModule({

  declarations: [
    AppComponent,
    FormComponent,
    CustomersComponent,
    NavbarComponent,
    HomeComponent,
    TableInfoDetailComponent,
    AforoComponent,
    CarouselComponent,
    HomeAforoComponent,
    LoadBarComponent,
    GeolocalizacionComponent,
    Carousel2Component
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})

export class AppModule { }

