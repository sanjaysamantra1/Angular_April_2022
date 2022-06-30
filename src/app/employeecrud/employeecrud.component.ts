import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css'],
})
export class EmployeecrudComponent implements OnInit {
  allEmployees: any;

  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {}

  fetchEmployees() {
    this.employeeService.getAllEmployees().subscribe((response) => {
      this.allEmployees = response;
    });
  }
  deleteEmp(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((response) => {
      alert('Deleted Successfully');
      this.fetchEmployees();
    });
  }
  addEmp(fname: any, lname: any, email: any) {
    const newEmp = {
      first_name: fname,
      last_name: lname,
      email: email,
    };
    this.employeeService.addEmployee(newEmp).subscribe((response) => {
      alert('Added Successfully');
      this.fetchEmployees();
    });
  }
}
