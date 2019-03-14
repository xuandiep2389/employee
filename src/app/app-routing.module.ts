import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";

const routes: Routes = [
  { path: 'add', component: AddEmployeeComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'detail/:id', component: EmployeeDetailComponent},
  { path: '', redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
