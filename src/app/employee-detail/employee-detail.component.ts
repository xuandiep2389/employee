import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../Employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() emp: Employee;

  constructor() { }

  ngOnInit() {
  }

}
