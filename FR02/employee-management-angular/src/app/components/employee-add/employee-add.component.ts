import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent {
  employee = { name: '', email: '', phone: '', salary: 0, departmentId: 0 };

  constructor(private employeeService: EmployeeService, private router: Router) {}

  onSubmit(): void {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
