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


  //POST employee to the server
  add(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeURL, employee)
    
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeeURL}/${id}`;
    return this.http.get<Employee>(url);
  }
}
