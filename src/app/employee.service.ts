import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  private employeeURL = 'http://localhost:3000/employees';


  //GET employees from server
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeURL)
  }
}
