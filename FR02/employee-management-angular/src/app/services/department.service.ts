import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8080/api/department';

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getDepartmentById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addDepartment(department: any): Observable<any> {
    return this.http.post(this.apiUrl, department);
  }

  updateDepartment(id: number, department: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, department);
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
