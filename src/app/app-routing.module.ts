import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AforoComponent } from './components/aforo/aforo.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'customers', component: CustomersComponent},
  // {path: 'form', component: FormComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aforo', component: AforoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
