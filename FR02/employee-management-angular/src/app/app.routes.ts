import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentAddComponent } from './components/department-add/department-add.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/add', component: EmployeeAddComponent },
  { path: 'employees/edit/:id', component: EmployeeEditComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/add', component: DepartmentAddComponent },
  { path: 'departments/edit/:id', component: DepartmentEditComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/employees' }, // Fallback route for invalid paths
];
