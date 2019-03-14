import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../Employee';
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../employee.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() emp: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getEmployee()
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe(emp => this.emp = emp)
  }

  goBack(): void {
    this.location.back();
  }
}
