import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditComponent } from './department-edit.component';

describe('DepartmentEditComponent', () => {
  let component: DepartmentEditComponent;
  let fixture: ComponentFixture<DepartmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
