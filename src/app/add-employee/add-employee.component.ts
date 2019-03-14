import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Employee} from '../Employee';
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employees: Employee[];
  employeeForm: FormGroup;

  constructor(private employeeService: EmployeeService,
              private formBuilder: FormBuilder,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      name: [''],
      detail: ['']
    });
    this.employeeService.getEmployees().subscribe(emp => this.employees = emp)
  }

  add(): void {
    if (this.employeeForm.valid) {
      const {value} = this.employeeForm;
      this.employeeService.add(value).subscribe(emp => {
        this.employees.unshift(emp);
        this.employeeForm.reset(
          {
            name: '',
            detail: ''
          }
        );
        this.goBack();
      })
    }
  }

  goBack(): void {
    this.location.back();
  }
}
