import { Component } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css'],
})
export class DepartmentAddComponent {
  department = { name: '', location: '' };

  constructor(private departmentService: DepartmentService, private router: Router) {}

  onSubmit(): void {
    this.departmentService.addDepartment(this.department).subscribe(() => {
      this.router.navigate(['/departments']);
    });
  }
}
