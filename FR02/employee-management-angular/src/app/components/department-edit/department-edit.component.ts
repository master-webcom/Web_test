import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css'],
})
export class DepartmentEditComponent implements OnInit {
  department = { name: '', location: '' };

  constructor(
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.departmentService.getDepartmentById(+id).subscribe((data) => {
        this.department = data;
      });
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.departmentService.updateDepartment(+id, this.department).subscribe(() => {
        this.router.navigate(['/departments']);
      });
    }
  }
}
